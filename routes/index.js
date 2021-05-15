var express = require('express');
var router  = express.Router();
var validator = require("email-validator");
const emailExists = require('email-exists')


const Tasty = require ("../models/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', error:false });
});

router.post('/submit',function(req,res){

  //check email if exist
  Tasty.findOne(req.body.email,(err,data)=>{
    if(err){
      res.status(500).send({
        message
      });
    }else{
      if(data.email){
        res.render("index", {
          error: true,
        });
      }else{
        // Insert into database
        const tasty = new Tasty({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            checkBox: req.body.checkbox,
        });
          
        //Fail or success message 
        Tasty.create(tasty, (err, data) => {
          if (err)
            res.status(500).send({
              message: err.message || "Some error occurred while submit the.",
            });
          else
            res.render("subscribed", {
              name: data.name,
            });
        });
      }
    }
  });
})

  


module.exports = router;
