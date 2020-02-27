/*
 * GET home page.
 */

var data = require("../data.json");

function removeValue(array, location, time){
  var new_arr;
  console.log(location, time);
  new_arr = array.map(function(v,i){
    return v['location'] === location && v['time'] === time ? null : v;
  });
  return new_arr.filter(function (el) {
    return el != null;
  });
}

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
      data.police = removeValue(data.police, location, time);
      data.police.push(newEvent);
    }
  }
  else {
    console.log('construction');
    if (location && time) {
      console.log('chilling');
      data.construction = removeValue(data.construction, location, time);
      data.construction.push(newEvent);
    }
  }
  res.render("report", data);
};

exports.removeEvent = function(req, res) {
  var type = req.query.type;
  console.log(type);

  var location = req.query.location;
  var time = req.query.time;

  console.log(location);
  console.log(time);

  if (type === 'cop') {
    console.log('cop');
    if (location && time) {
      console.log('chilling');
      data.police = removeValue(data.police, location, time);
    }
  }
  else {
    console.log('construction');
    if (location && time) {
      console.log('chilling');
      data.construction = removeValue(data.construction, location, time);
    }
  }
  res.render("report", data);
};