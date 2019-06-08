// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
//  host: "izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//  port: 3306,
//  user: "d4ktkr1rs6iormgb",
//  password: "kd2jve0d19j92ub3",
//  database: "n6obspxlz2vlpc7n"
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Xacn#1855",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
