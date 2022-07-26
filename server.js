const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'text article',
        createdAt: new Date(),
        description: 'test description'
    }]
    res.render('articles/index', {articles: articles })
})

app.listen(5000);