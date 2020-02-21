'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.question a').click(getAnswer);

}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function getAnswer(e) {
	// Prevent following the link
	e.preventDefault();

	// // Get the div ID, e.g., "project3"
	var questionID = $(this).closest('.question').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = questionID.substr('question'.length);
	
	$.get("/question/" + idNumber, callBackFn);
	console.log("http://localhost:3000/question" + "/" + idNumber);
}

function callBackFn(result) {
	console.log(result);

    var projectHTML = '<h3>' + result['answer'] + '</h3>';
    console.log(result['answer']);

	$("#question" + result["id"] + " .details").html(projectHTML).toggle();
}



