/*
 * GET home page.
 */

var data = require("../data.json");

function removeValue(array, name, description, imageURL){
	var new_arr;
	console.log(name, description, imageURL);
	new_arr = array.map(function(v,i){
		return v['name'] === name && v['description'] === description && v['imageURL'] === imageURL? null : v;
	});
	return new_arr.filter(function (el) {
		return el != null;
	});
}

exports.addBuildingPlan = function(req, res) {
	
	data["building_plan_alt"] = false;

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
	data.building_plans = removeValue(data.building_plans, name, description, imageURL);
	data.building_plans.push(newPlan);
	res.render('building_plan', data);	
};

exports.addBuildingPlanAlt = function(req, res) {    
	data["building_plan_alt"] = true;
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
};

exports.removeBuildingPlan = function(req, res) {
	var name = req.query.name;
	var description = req.query.description;
	var imageURL = req.query.planURL;

	data.building_plans = removeValue(data.building_plans, name, description, imageURL);
	console.log(data.building_plans);
	res.render('building_plan', data);
};