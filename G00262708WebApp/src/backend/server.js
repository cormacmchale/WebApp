//part 2
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

var mongoose = require('mongoose');
const mongoDB = 'mongodb://shamsandwiches:materia22@ds137863.mlab.com:37863/labdatabase';
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var Schema = mongoose.Schema;

var addComment = new Schema({
    title: String,
    comment: String
});

var PostModel = mongoose.model('DataBaseInfo', addComment);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
            });

//Here we are configuring express to use body-parser as middle-ware.
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

var server = app.listen(8081, function () {
        var host = server.address().address
        var port = server.address().port
        })

 app.post('/database', function(req, res){
            //console.log(req.body)
            PostModel.create(
                {
                  title: req.body.title,
                  comment: req.body.comment
                }
            );
        })

app.get('/database', function(req, res){
            //console.log(PostModel)
            res.status(200).json({'posts':'dATABASEiNFO'})
        })