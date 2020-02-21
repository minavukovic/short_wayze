/*
 * GET home page.
 */
var data = require("../data.json");

exports.addCop = function (req, res) {
  var x = req.query.x;
  var y = req.query.y;

  var newFriend = { "x": x, "y": y };

  console.log(x);
  console.log(y);
  data.police.push(newFriend);
  res.render("report", data);
};

/*exports.view = function(req, res){
  res.render('report');
};*/
