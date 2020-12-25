const express = require('express')
const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_new_password",
  database: "procom"
});

db.connect(err => {
  if (err) {
    if (err != null) console.log({ error: err.message });
  }
  else
  console.log("Database Connected");
});
module.exports = db;