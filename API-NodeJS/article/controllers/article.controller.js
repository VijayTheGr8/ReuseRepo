const ArticleModel = require('../models/article.model');

exports.search = (req, res) => {
    ArticleModel.filterByTags(req.body.query.tags)
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