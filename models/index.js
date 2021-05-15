const sql = require("../config/database");

const Tasty = function (tasty) {
    this.name = tasty.name;
    this.email = tasty.email;
    this.message = tasty.message;
    this.checkBox = tasty.checkBox;
    this.created_at = new Date();
};

Tasty.create = (newTasty, result) => {
    sql.query("INSERT INTO tasty SET ?", newTasty, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("successful");
      result(null, { newTasty });
    
    });
};

Tasty.findAll = (result) => {
    sql.query("Select * from tasty ORDER BY created_at DESC", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("get data: ", { res });
      result(null, { res });
    });
  };

  Tasty.findOne = (email, result) => {
    sql.query("SELECT * FROM tasty WHERE email =?", email, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, { email });
    
    });
};

module.exports = Tasty;