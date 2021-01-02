const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');
const { result } = require("lodash");
const router = require("./routes/blogRoutes");

const app = express();

// Connect to MongoDb
const dbURI =
  "mongodb+srv://dint:dint395799@nodeninja.ovbsv.mongodb.net/node-ninja?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");

//listening to port

app.listen(3000);

// middleware & static files

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes

app.use('/blogs/', blogRoutes);

// 404 not found

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
