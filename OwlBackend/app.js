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

PORT=5000;

// route for the template engine
app.get("/",(req,res)=>{
    res.render('text');
})

// Step 5:
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));