// taking input and adding it in li format
function newListItem() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("inputtxt").value;
	var data = { data: inputValue };
	console.log(inputValue);
	
	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: 'http://localhost:3001/addNewTask',
		success: function (data) {
			console.log('success');
			console.log(JSON.stringify(data));
			var t = document.createTextNode(inputValue);
			li.innerHTML = '<input class="checkbox" type="checkbox"/><span class="input">'+inputValue+'</span><button class="close" type="button">&times;</button>';
			
			console.log(li);
			if (inputValue === '') {
				document.getElementById("warning").innerHTML = "Warning:Please enter valid input value";
			}
			else {
				document.getElementById("warning").innerHTML = "";
				document.getElementById("ulItem").appendChild(li);
			}
			document.getElementById("inputtxt").value = "";
		}
	});
}
//for close button
$(document).ready(function () {
	$(document).on('click', '.close', function () {
		var removeTxt = $(this).closest("li").find('.input').text();
		$.ajax({
			url: '/delete?todo='+removeTxt,
			type: 'delete',
			success: function(result) {	
				$(this).closest("li").remove();
				
			}
		});	
		console.log(removeTxt);	
	});
	//active
	// $(".activeBtn").click(function() {

	// })
	//mark all
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
	//remove mark when click on checkbox
	$(document).on('change', '.checkbox', function () {
		if ($(this).is(':checked')) {
			$(this).parent().addClass("liMarkAll");
		}
		else {
			$(this).parent().removeClass("liMarkAll");
		}
	})
});