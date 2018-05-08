// taking input and adding it in li format
function newListItem() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("inputtxt").value;
	var t = document.createTextNode(inputValue);
	li.innerHTML = '<input class="checkbox" type="checkbox"> <button class="close" type="button">&times;</button>';
	li.appendChild(t); 
	if (inputValue === '') {
		document.getElementById("warning").innerHTML = "Warning:Please enter valid input value";
	} 
	else {
		document.getElementById("warning").innerHTML="";
		document.getElementById("ulItem").appendChild(li);
	}
	document.getElementById("inputtxt").value = "";
}
//for close button
$(document).ready( function(){
	$(document).on('click','.close',function(){	
		$(this).closest("li").remove();
	});
  //mark all
  $(".markallBtn").click(function() {
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
	$(document).on('change','.checkbox', function() {
		if ($(this).is(':checked')) {
			$(this).parent().addClass("liMarkAll");
		}
		else {
			$(this).parent().removeClass("liMarkAll");
		}
	})
});