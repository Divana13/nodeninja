const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDb
const dbURI = 'mongodb+srv://dint:dint395799@nodeninja.ovbsv.mongodb.net/node-ninja?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result =>{console.log('connected to db')})
    .catch(err =>{console.log(err)});

//register view engine
app.set("view engine", "ejs");

//listening to port

app.listen(3000);

// middleware & static files

app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "kill the frozen throne", reward: "The frozen sword" },
    { title: "Find the ring of Strenght", reward: "Strenght + 50" },
    { title: "Find three flower of life", reward: "Random Ring" },
  ];
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 not found

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
