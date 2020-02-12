
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('building_plan');
};

var data = require("../data.json");

exports.addBuildingPlan = function(req, res) {    
	var name = req.query.name;
	var imageURL = req.query.planURL;

	var newPlan = 
		{ 	"name": name, 
			"imageURL": imageURL
		};

	console.log(newPlan);
	console.log(imageURL);
	data.building_plans.push(newPlan);
	res.render('building_plan', data);	
}



// var express = require('express');
// var multer = require('multer');
// var app = express();


// var storage =   multer.diskStorage({
//   // file upload destination
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now());
//   }
// });

// var upload = multer({ storage : storage}).single('avatar');app.get('/',function(req,res){
//       res.sendFile(__dirname + "/building_plan.handlebars");
// });

// app.post('/add/building_plan',function(req,res){
//     upload(req,res,function(err) {      
//     // req.file is the `avatar` file
//       // req.body will hold the text fields, if there were any        
//       if(err) {
//             return res.end("Error uploading file.");
//             //return res.render('building_plan');
//         }
//         //res.end("File is uploaded");
//         res.render('building_plan');
//     });
// });

// app.listen(app.get('port'),function(){
//     console.log("Working on port 3000");
// });