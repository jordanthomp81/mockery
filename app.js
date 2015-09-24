// npm requires
var requestify = require('requestify'); 
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var express     = require('express');
var app         = express();              // create app with Express
var bodyParser  = require('body-parser'); // Pull information from HTML POST
var port    = parseInt(process.env.PORT, 10) || 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('www'));

// require('./lib/mongod');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://jordanthomp81:1manbandjat@apollo.modulusmongo.net:27017/u3Dozogi');

var mockerySchema = new mongoose.Schema({
  id: String
, text_content: String
, shape: String
, width: Number
, height: Number 
, background_color: String
, left: Number 
, top: Number
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var mockery = mongoose.model('MockeryDB', mockerySchema);


app.post('/mongo', function (req, res, next) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
      });
    
      req.on('end', function () {
          body = JSON.parse(body);
          console.log(JSON.stringify(body));
          body.forEach(function(item, index) {
              var element = new mockery({
                id: item.id,  
                text_content: item.text_content, 
                shape: item.shape, 
                width: item.width, 
                height: item.height, 
                background_color: item.background_color, 
                left: item.left, 
                top: item.top
              });
              element.save(function(err, element) {
                if (err) return console.error(err);
                    console.dir(element);
              });
          });
      });
//    
//    var arr = // array of objects;
//    res = [];
//
//    arr.forEach(function (item) {
//        item.save(function (err) {
//            res.push(err);
//            if (res.length === arr.length)
//            {
//                // Done
//            }
//        });
//    });
    res.send({ status: 'SUCCESS' });
});

// require controllers
//var schedule = require('./controllers/childcare');
//var calendar  = require('./controllers/calendar');

app.use(express.static('assets')); // set the static files location
app.use(bodyParser.urlencoded({'extended':'false'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// routes

app.get('/users', function(req, res){
  res.send('<h1>hello world</h1>');
});

//app.post('/schedules', schedule.addSchedule);
// app.delete('/childcare/remove', childcare.deleteSchedule);
//app.get('/schedules', schedule.getSchedules);
//app.post('/schedule', schedule.getSchedule);

// errors
//app.use(function (req, res) {
  //res.status(403).send('Unauthorized!');
//});

// pass 4 arguments to create an error handling middleware
//app.use(function (req, res) {
  //console.log('ERRRRRRRRRR', err.stack);
  //res.status(500).send('My Bad');
//});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});