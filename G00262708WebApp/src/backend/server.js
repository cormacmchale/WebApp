var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

//setting up mongoose/database connection and schema
var mongoose = require('mongoose');
const mongoDB = 'mongodb://shamsandwiches:materia22@ds137863.mlab.com:37863/labdatabase';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var Schema = mongoose.Schema;
var addRecipe = new Schema({
    Dish: String,
    Ingredients: String,
    img: String
});

var PostModel = mongoose.model('Recipes', addRecipe);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, DELETE, PUT, OPTIONS");
    next();
});

//Here we are configuring express to use body-parser as middle-ware.
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

var server = app.listen(8081, function ()
 {
    var host = server.address().address
    var port = server.address().port
 })

//Server Methods
//adds a document to the database based on infor sent from service
 app.post('/database', function(req, res){
            //console.log(req.body)
            PostModel.create(
                {
                  Dish: req.body.Dish,
                  Ingredients: req.body.Ingredients,
                  img:req.body.img
                }
            );
            //error handling for sending duplicates
            res.send("No Duplicates Please");
        })

//returns all documents to client
app.get('/database', function(req, res){         
    PostModel.find(function(err, data) {
        if (err)
        {
        res.send(err)
        console.log(err);
        }
        res.json(data);
        });   
 })//end get

//returns a document based off search word sent from service
 app.get('/database/search/:Dish', function(req, res)
 {           
    PostModel.findOne({Dish: req.params.Dish},function(err, data) {
        if (err)
        {
        res.send(err)
        console.log(err);
        }
        res.json(data);
        });  
 })//end get

 //deletes a document from the database based of the id sent from service
 app.delete('/database/delete/:id', function(req, res)
 {         
    PostModel.deleteOne({ _id: req.params.id },
        function (err) {});
 })//end delete