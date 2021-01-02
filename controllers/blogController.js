const Blog = require('../models/blog');

// controller function

const blogIndex = (req, res) =>{
    Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

const blogDetail = (req, res) =>{
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('detail', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        res.status(404).render("404", { title: "404" });
      });
}

const blogCreate = (req, res) =>{
    res.render("create", { title: "Create new blog"});
}

const blogPost = (req, res) => {
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result =>{
        res.redirect('/blogs')
      })
      .catch((err)=>{
        console.log(err);
      })
}

const blogDelete = (req, ers) =>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then( result =>{
        res.json({ redirect: '/blogs'});
      })
      .catch(err => console.log(err));
}

module.exports = {
    blogIndex, blogDetail, blogCreate, blogPost, blogDelete
}