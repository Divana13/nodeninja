const express = require('express');

const app = express();

//listening to port

app.listen(3000);

app.get('/', (req, res) =>{
    res.sendFile('./view/index.html', { root: __dirname });
});
app.get('/about', (req, res) =>{
    res.sendFile('./view/about.html', { root: __dirname });
});

// redirect

app.get('/about_us', (reg, res) =>{
    res.redirect('/about')
})

// 404 not found

app.use((req, res) =>{
    res.status(404).sendFile('./view/404.html', { root: __dirname });
});