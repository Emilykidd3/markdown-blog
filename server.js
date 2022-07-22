const express = require('express');
const articleRouter = require('./routes/articles')
const app = express();

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'text article',
        createdAt: new Date(),
        description: 'test description'
    }]
    res.render('index', {articles: articles })
})

app.listen(5000);