$(function(){
	//document ready
	alert("document ready");
	
	$('#searchform').submit(function(){
		var searchterms = $("#searchterms").val();
		addItemToList(searchterms);
		return false;
	});
});



function addItemToList (item){
	$('#results').append("<li>" +item + "</li>");
}

