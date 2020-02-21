'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.question').click(getAnswer);

	// $('#colorBtn').click(randomizeColors);

	// $(".project").click(projectClick);

}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function getAnswer(e) {
	// Prevent following the link
	e.preventDefault();

	// // Get the div ID, e.g., "project3"
	var questionID = $(this).closest('.question').attr('id');
	
	$.get("/question/" + questionID, callBackFn);
	console.log("http://localhost:3000/question" + "/" + questionID);
}

function callBackFn(result) {
	console.log(result);

    var projectHTML = '<p>' + result['answer'] + '</p>';

	$("#question" + result["id"] + " .details").html(projectHTML).toggle();
}



