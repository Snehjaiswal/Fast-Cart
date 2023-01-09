"use strict";

const { connect, connection } = require("mongoose");

connect('mongodb+srv://sneh:sneh@happydog.rrlw70f.mongodb.net/?retryWrites=true&w=majority', (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection.useDb('Fastcart');
  console.log("Connected to MongoDB");
});
