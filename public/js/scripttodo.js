/**
 * @author Akshata 
 * @description code for TODO List
 */


$(document).ready(function () {
/**
* @description function taking input and adding it in li format dynamically when click on add button
*/
	$(".addButton").click(function(){
		
		var li = $("<li></li>");  
		var inputValue = $("#inputtxt").val().trim();
		var data = { data: inputValue };
		if(inputValue.trim() == ""){
			$("#warning").text("Warning: Please enter valid input value");
		}
		else {
			$("#warning").text(" ");
			$.ajax({
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: 'http://localhost:3001/addNewTask',
				success: function (data) {	
					console.log(data);				
					$("#ulItem").append("<li><input class='checkbox' type='checkbox'/><input class='input' data-id="+data.id+" value="+JSON.stringify(data.name)+"><button class='close' type='button'>&times;</button></li>")	
					$(".taskTextBox").val("");				
				},
				error: function(err) {
					$("#warning").text(JSON.parse(err.responseText).error);	
				}
			});
		}
	
	})
	/**
	 * @description removing li when click on the close button
	 */
	$(document).on('click', '.close', function () {
		var $btn = this;
		var removeTxt = $(this).closest("li").find('.input').attr("data-id");	
		$.ajax({
			url: '/delete?id='+removeTxt,
			type: 'delete',
			success: function(result) {	
				$btn.closest("li").remove();				
			},
			error: function(err){
				console.log("err", err);
			}
		});	
	});
	/**
	 * @description mark all li as completed
	 */
	$(".markallBtn").click(function () {
		$.ajax({
			url: '/markall',
			type: 'PUT',
			success: function(){
					$("li").addClass("liMarkAll");
					$('.checkbox').attr('checked', 'checked');
					$(".input").addClass("liMarkAll").attr('readonly',true);					
			},
			error: function(err){
				console.log("err", err);
			}
		})
	});
	/**
	 * @description unmark all li as completed
	 */
	$(".unmarkallBtn").click(function() {
		$.ajax({
			url: '/unmarkall',
			type: 'PUT',
			success: function(){
				$("li").removeClass("liMarkAll");
				$(".checkbox").removeAttr("checked");
				$(".input").removeClass("liMarkAll");
			},
			error: function(err){
				console.log("err", err);
			}
		})
	})
	/**
	 * @description remove mark when click on checkbox
	 */
	$(document).on('change', '.checkbox', function () {
		var markthis = $(this);
		var statusId = $(this).closest("li").find('.input').attr("data-id");
		$.ajax({
			url: '/mark?id='+statusId,
			type: 'PUT',
			success: function() {	
				if (markthis.is(':checked')) {
					markthis.parent().addClass("liMarkAll");			
					markthis.parent().children("input").addClass("liMarkAll").attr('readonly',true);				
				}
				else {
					markthis.parent().removeClass("liMarkAll");
					markthis.parent().children("input").removeClass("liMarkAll");					
				}
			},
			error: function(err){
				console.log("err", err);
			}
		});			
	})

	/**
	 * @description showing all task when click on all task button
	 */
	$(".allBtn").click(function(){
		$(".activeTask").addClass("disp")
		$(".allTask").removeClass("disp")
		$(".completeTask").addClass("disp")
	})
	/**
	 * @description showing active task when click on active button
	 */
	$(".activeBtn").click(function(){
		$(".activeTask").html('')
		$.ajax({
			url: '/activetask',
			type: 'get',
			success: function(active) {		
				for(i= 0; i<active.length; i++) {
					$(".activeTask").append("<li><input class='checkbox' type='checkbox'/><input class='input' data-id="+active[i].id+" value ="+JSON.stringify(active[i].name)+"><button class='close' type='button'>&times;</button></li>")				
				}
				$(".activeTask").removeClass("disp")
				$(".allTask").addClass("disp")
				$(".completeTask").addClass("disp")
			},
			error: function(err){
				console.log("err", err);
			}
		});	
	})
	/**
	 * @description showing completed task when click on completed button
	 */
	$(".completedBtn").click(function(){
		$(".completeTask").html('')
		$.ajax({
			url: '/completetask',
			type: 'get',
			success: function(complete) {		
				for(i= 0; i<complete.length; i++) {
					var li = $("<li></li>"); 
					$(".completeTask").append("<li><input class='checkbox' type='checkbox' checked/><input class='input' data-id="+complete[i].id+" value ="+JSON.stringify(complete[i].name)+"><button class='close' type='button'>&times;</button></li>")								
				}
				$(".activeTask").addClass("disp")
				$(".allTask").addClass("disp")
				$(".completeTask").removeClass("disp")
				$(".completeTask li").addClass("liMarkAll")
				$(".completeTask input").addClass("liMarkAll").attr('readonly',true)			
			},
			error: function(err){
				console.log("err", err);
			}
		});	
	})
	/**
	 * @description clear completed task when click on clear completed button
	 */
	$(".clrBtn").click(function(){
		$.ajax({
			url: '/clrtask',
			type: 'delete',
			success: function(){
				$(".liMarkAll").remove()
			},
			error: function(err){
				console.log("err", err);
			}
		})
	})
	/**
	 * @description update existing task
	 */
	$('.input').keypress(function (e) {
		var inputVal = $(this).closest("li").find(".input").val();
		var inputId = $(this).closest("li").find('.input').attr("data-id");
		var thisTask = $(this)
		var key = e.which;
		if(key == 13)  
			if(inputVal.trim() == ""){
				$("#warning").text("Warning: Please enter valid input value");
			}
			else {
				$("#warning").text(" ");
				$.ajax({
					url: '/inputtask/'+inputId,
					type: 'PUT',
					data: JSON.stringify({name: inputVal}),
					contentType: 'application/json',
					success: function(result){
						thisTask.closest("li").find(".input").val(result)				
					},
					error: function(err){
						console.log("err", err);
					}
				});						
			}
	 	}); 
});