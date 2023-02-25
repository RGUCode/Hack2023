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
			prettyPrintJSON(jsondata);
		});
		
}


function prettyPrintJSON(jsondata){
	//prints the prettyJSON to the screen
	var pretty= JSON.stringify(jsondata, null,4);
	$('#resultsbox').append("<pre>" +pretty + "</pre>");
		
}


