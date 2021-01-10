const ArticleController = require('./controllers/article.controller');

exports.routesConfig = function (app) {
    app.post('/article/search', [
        ArticleController.search
    ]);
    app.post('/article/create', [
        ArticleController.createArticle
    ]);
    app.put('/article/update/:articleId', [
        ArticleController.updateArticle
    ]);
    app.delete('/article/:articleId', [
        ArticleController.removeById
    ]);
    app.get('/article/:id', [
        ArticleController.getArticleById
    ]);
};
