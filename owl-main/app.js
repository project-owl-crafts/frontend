const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();


// Step 1:
dotenv.config();
// Step 2:
app.use(express.json());
// Step 3:
// app.use(express.static("public"));

// Step 4:
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Step 5:
app.get('/', function(req, res) {
  res.render('page1');
});

app.get('/page1', function(req, res) {
  res.render('frontend/partials/header');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));