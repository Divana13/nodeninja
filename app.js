const express = require("express");
const morgan = require("morgan");

const app = express();

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
