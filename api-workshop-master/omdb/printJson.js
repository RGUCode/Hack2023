$(function(){
	//document ready
	alert("document ready");
	
	$('#searchform').submit(function(){
		//get current value and add to items list
		var searchterms = $("#searchterms").val();
		//call our search youtube function
		getResultsFromOMDB(searchterms);
		return false;
	});
});

function getResultsFromOMDB (searchterms) {
	//call youtube API using AJAX
	//build url for the request
		var url = "http://www.omdbapi.com/?s="+searchterms;
		//use jquery json shortcut
		$.getJSON(url, function(jsondata){
			//handle the results
			printJSON(jsondata);
		});
		
}


function printJSON(jsondata){
	//prints the JSON to the screen
	var normal = JSON.stringify(jsondata);
	$('#resultsbox').append("<p>" +normal + "</p>");
		
}


