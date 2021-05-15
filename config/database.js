const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tasty",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  const createTasty = `create table if not exists tasty(
        id int primary key auto_increment,
        name varchar(255)not null,
        email varchar(255)not null,
        message varchar(255)not null,
        checkBox boolean,
        created_at DATETIME
        )`;

  connection.query(createTasty, function (err, results, fields) {
    if (err) {
      console.log("created table", err.message);
    }
  });
  console.log("Connected to the MySQL server.");
});

module.exports = connection;
