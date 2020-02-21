
/*
 * GET home page.
 */

var data = require("../data.json");

exports.addBuildingPlan = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
	var planURL = req.query.planURL;

	var newPlan = 
		{ 	"name": name, 
			"description": description,
			"planURL": planURL
		};

	data.building_plans.push(newPlan);	
	res.render('building_plan', data);	
}