var express = require('express');
var router=express.Router();  // what is this for??
var burger= require('../models/burger.js');

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject={
            burger: data
        };
        console.log("I got here!");
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name","devoured"],[req.body.name,req.body.devoured], function(result){
        //send back the ID of the new burger
        res.json({id: result.insertId});  // where is result.insertId coming from?
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = "+req.params.id;
    console.log("condition is id =", condition);
    console.log("req.body is:");
    console.log(req.body);
    console.log("req.body.devoured is:");
    console.log(req.body.devoured);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if (result.changedRows===0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;