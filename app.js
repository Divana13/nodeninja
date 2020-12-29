const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

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

app.use(morgan("dev"));

// mongoose and mongo sandbox routs
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (reg, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (reg, res) => {
  Blog.findById("5feb070b15dcb32f501171c1")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog rout
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new blog" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
  res.render("create", { title: "Create" });
});

app.get("/blogs", (reg, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404 not found

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
