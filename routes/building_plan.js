/*
 * GET home page.
 */

var data = require("../data.json");

exports.addBuildingPlan = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
	var imageURL = req.query.planURL;

	var newPlan = 
		{ 	"name": name, 
			"description": description,
			"imageURL": imageURL
		};

	console.log(newPlan);
	console.log(imageURL);
	data.building_plans.push(newPlan);
	res.render('building_plan', data);	
}