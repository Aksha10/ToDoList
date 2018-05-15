/**
 * @author Akshata 
 * @description code for TODO List
 */

/**
* @function newListItem()
* @description function newListItem() taking input and adding it in li format dynamically
*/
function newListItem() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("inputtxt").value;
	var data = { data: inputValue };
	console.log(inputValue);
	
	if (inputValue === "") {
		document.getElementById("warning").innerHTML = "Warning:Please enter valid input value";
	}
	else {
		$.ajax({
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
			url: 'http://localhost:3001/addNewTask',
			success: function (data) {		
				console.log('success');
				console.log(JSON.stringify(data));
				debugger;
				li.innerHTML = '<input class="checkbox" type="checkbox"/><span class="input" data-id='+data.id+'>'+data.name+'</span><button class="close" type="button">&times;</button>';
				document.getElementById("ulItem").appendChild(li);
			}
		});
	}
	document.getElementById("inputtxt").value = "";
}

$(document).ready(function () {
	/**
	 * @description removing li when click on the close button
	 */
	$(document).on('click', '.close', function () {
		var removeTxt = $(this).closest("li").find('.input').attr("data-id");
		console.log(removeTxt);	
		$.ajax({
			url: '/delete?todo='+removeTxt,
			type: 'delete',
			success: function(result) {	
				$(this).closest("li").remove()				
			}
		});	
	});

	/**
	 * @description mark all li as completed
	 */
	$(".markallBtn").click(function () {
		if ($("li").hasClass("liMarkAll")) {
			$("li").removeClass("liMarkAll");
			$('.checkbox').removeAttr('checked');
		}
		else {
			$("li").addClass("liMarkAll");
			$('.checkbox').attr('checked', 'checked');
		}
	});
	/**
	 * @description remove mark when click on checkbox
	 */
	$(document).on('change', '.checkbox', function () {
		if ($(this).is(':checked')) {
			$(this).parent().addClass("liMarkAll");
		}
		else {
			$(this).parent().removeClass("liMarkAll");
		}
	})
});