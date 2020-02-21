/*
 * GET home page.
 */

var data = require("../data.json");

exports.addEvent = function(req, res) {
  var type = req.query.type;
  console.log(type);

  var location = req.query.location;
  var time = req.query.time;

  var newEvent = {
    "location": location,
    "time": time
  };

  console.log(location);
  console.log(time);

  if (type === 'cop') {
    console.log('cop');
    if (location && time) {
      console.log('chilling');
      data.police.push(newEvent);
    }
  }
  else {
    console.log('construction');
    if (location && time) {
      console.log('chilling');
      data.construction.push(newEvent);
    }
  }
  res.render("report", data);
};