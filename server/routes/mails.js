var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var request = require('request');
var fdata = {};
var mailSchema = require("./mailSchema");
router.get('/', function (req, res) {


     mailSchema.find(function(err, data){

   fdata = data;
console.log("getdata "+fdata);
    res.send(fdata);
 });

// db.close();
});
router.post('/', function(req, res, next) {
  var data=req.body;

  console.log("postdata"+req.body.msg_id);
     var obj=new mailSchema(data);
     console.log("obj"+obj);

  obj.save( function(err){
       if (err)
         console.log(err);

     });
  res.send(" Inserted");
  });




module.exports = router;
