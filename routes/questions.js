var questions = require("../questions.json");

exports.questionInfo = function(request, response) { 
	var questionID = request.params.number;
	if (questionID == "random") {
		questionID = Math.floor(Math.random() * questions.length) + 1;
	} else {
		questionID = parseInt(questionID);
	}

  	var q = questions[questionID-1]; // of by one, our first project has index 0
  	response.json(q);
}