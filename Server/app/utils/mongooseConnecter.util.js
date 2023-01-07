"use strict";

const { connect, connection } = require("mongoose");
const { dbUri, dbName } = require("../../config");

connect('mongodb+srv://sneh:sneh@happydog.rrlw70f.mongodb.net/?retryWrites=true&w=majority', (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection.useDb(dbName);
  console.log("Connected to MongoDB");
});
