var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

//launch app from server.js
app.use("/", express.static(path.join("project")));
app.get('/', function (req, res) {
    res.sendFile(path.join("project", "index.html"));
})

//setting up mongoose/database connection and schema
var mongoose = require('mongoose');
const mongoDB = 'mongodb://shamsandwiches:materia22@ds137863.mlab.com:37863/labdatabase';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
var Schema = mongoose.Schema;
//schema for info fro recipe
var addNewRecipe = new Schema
    (
    {
        Dish: String,
        Instructions: String,
        img: String,
        Ingredients: Array
    }
    );
//model for accessing info from database "CRUD"
var NewModel = mongoose.model('NewRecipes', addNewRecipe);
var Desserts = mongoose.model('Desserts', addNewRecipe);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    next();
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
})

//Server Methods
//adds a document to the database based on info sent from service
app.post('/database/test/Savory', function (req, res) {
    //console.log(req.body)
    NewModel.create
        (
        {
            Dish: req.body.Dish,
            Instructions: req.body.Instructions,
            img: req.body.img,
            Ingredients: req.body.Ingredients
        }
        );
    //error handling for sending duplicates
    res.status(200).send();
})//end post
app.post('/database/test/Sweet', function (req, res) {
    //console.log(req.body)
    Desserts.create
        (
        {
            Dish: req.body.Dish,
            Instructions: req.body.Instructions,
            img: req.body.img,
            Ingredients: req.body.Ingredients
        }
        );
    //error handling for sending duplicates
    res.status(200).send();
})//end post

//returns all documents to client
app.get('/database/test/Savory', function (req, res) {
    NewModel.find(function (err, data) {
        if (err) {
            res.send(err)
            console.log(err);
        }
        res.json(data);
    });
})//end get
app.get('/database/test/Sweet', function (req, res) {
    Desserts.find(function (err, data) {
        if (err) {
            res.send(err)
            console.log(err);
        }
        res.json(data);
    });
})//end get

//returns a document based off search word sent from service
app.get('/database/search/Savory:Dish', function (req, res) {
    NewModel.findOne({ Dish: req.params.Dish }, function (err, data) {
        if (err) {
            res.status(404).send();
        }
        res.json(data);
    });
})//end get
app.get('/database/search/Sweet:Dish', function (req, res) {
    Desserts.findOne({ Dish: req.params.Dish }, function (err, data) {
        if (err) {
            res.status(404).send();
        }
        res.json(data);
    });
})//end get

//deletes a document from the database based of the id sent from service
app.delete('/database/delete/Savory:id', function (req, res) {
    NewModel.deleteOne({ _id: req.params.id },
        function (err) { });
})//end delete
app.delete('/database/delete/Sweet:id', function (req, res) {
    Desserts.deleteOne({ _id: req.params.id },
        function (err) { });
})//end delete

//takes in id and new info about recipe finds ID in the database and updates it
app.put('/database/update/Savory:id', function (req, res) {
    NewModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}
)//end put
app.put('/database/update/Sweet:id', function (req, res) {
    Desserts.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}
)//end put