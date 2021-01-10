const ArticleModel = require('../models/article.model');

exports.search = (req, res) => {
    ArticleModel.filter(req.body.query)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        });
};

exports.createArticle = (req, res) => {
    ArticleModel.createArticle(req.body)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        });
};

exports.updateArticle = (req, res) => {
    ArticleModel.patchArticle(req.params.articleId, req.body)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        });
};

exports.removeById = (req, res) => {
    console.log(req.params);
    ArticleModel.removeById(req.params.articleId)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        });
};

exports.getArticleById = (req, res) => {
    ArticleModel.findById(req.params.id)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        });
};