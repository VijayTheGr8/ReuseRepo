const ArticleController = require('./controllers/article.controller');

exports.routesConfig = function (app) {
    app.post('/article/search', [
        ArticleController.search
    ]);
    app.get('/article/:id', [
        ArticleController.getArticleById
    ]);
    app.post('/article/insert', [
        ArticleController.insert
    ]);
};
