var express = require('express');
var router  = express.Router();
var moment  = require('moment');

const Tasty = require ("../models/index");

/** LIST PAGE */
router.get('/', function(req, res, next) {

    Tasty.findAll(function (err, data) {
        if (err)
          res.status(500).send({
            message: err.message || "Some error occurred while showing the list.",
          });
          console.log(data.res);
        res.render("list", {
          data: data.res,
          moment:moment,
        });
    });
});


  module.exports = router;