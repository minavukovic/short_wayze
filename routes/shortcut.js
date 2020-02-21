
/*
 * GET home page.
 */


var data = require("../data.json");
var shortcut = require("../public/js/drawShortcut.js");

exports.addShortcut = function(req, res) {   
	var start = req.query.start;
	var end = req.query.end;
	var image = shortcut.dataURL; // trying to access dataURL from drawShortcut.js

	var newShortcut = 
		{ 	"start": start, 
			"end": end,
			"image": image
		};

	console.log(image);
	console.log(newShortcut);
	data.shortcuts.push(newShortcut);
	res.render('shortcut', data);	
}