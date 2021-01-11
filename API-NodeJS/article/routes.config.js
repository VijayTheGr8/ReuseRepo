/** This file containes route for search, fetch, add, update & delete the articles  */

const ArticleController = require('./controllers/article.controller');

exports.routesConfig = function (app) {
    /** Search article basedon userId and / or tags */
    // Post is used to get the params from body
    app.post('/article/search', [
        ArticleController.search
    ]);

    /** Create Article API */
    app.post('/article/create', [
        ArticleController.createArticle
    ]);

    /** Update Article */
    app.put('/article/update/:articleId', [
        ArticleController.updateArticle
    ]);

    /** Delete Article By Id */
    app.delete('/article/:articleId', [
        ArticleController.removeById
    ]);

    /** Fetch Article By Id */
    app.get('/article/:id', [
        ArticleController.getArticleById
    ]);
    app.post('/article/insert', [
        ArticleController.insert
    ]);
};
