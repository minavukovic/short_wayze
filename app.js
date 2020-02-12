
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var shortcut = require('./routes/shortcut');
var report = require('./routes/report');
var building_plan = require('./routes/building_plan');
var help = require('./routes/help');
var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/home', index.view);
app.get('/add/shortcut', shortcut.view);
app.get('/add/report', report.view);
// app.get('/add/building_plan', building_plan.view);
app.get('/add/building_plan', building_plan.addBuildingPlan);
app.get('/help', help.view);
app.get('/', login.view);
app.get('/login', login.view);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



////////////////////////////////////////////////////////
// var multer  =   require('multer');

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



