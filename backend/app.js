const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
var fs = require('fs');
const postsRoutes = require("./routes/posts");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(
    "mongodb://localhost:27017/DBshop"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false}));
  // app.use("/uploads", express.static(path.join("backend/uploads")));
  app.use('/backend/uploads', express.static('backend/uploads'))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
