const ArticleModel = require('../models/article.model');

/** list articles filtered by  tags and / or userId */
// req=request coming from the browser
// res=the data going back to browser
exports.search = (req, res) => {

    // req.body.query=lists filter criteria coming from browser
    ArticleModel.filter(req.body.query)
        .then((articles) => {
            //now that we have list of articles lets write it to console log and then send it to browser.
            console.log(articles);
            // send 200 to indicate to browser that call was successful and send the result which is ilst of articles
            res.status(200).send(articles);
        });
};


/** Create Article */
// req=request coming from the browser
// res=the data going back to browser
exports.createArticle = (req, res) => {
    // req.body contains the article data thatw e need to save in the datastore
    ArticleModel.createArticle(req.body)
        .then((article) => {
            console.log(article);
            // returning a status code 200 which means call was successful
            // also sending results which is the newly created article object returned from mongoose along with the id field which was populated by mongoose
            res.status(200).send(article);
        });
};

/** Update Article */
// req=request coming from the browser
// res=the data going back to browser
exports.updateArticle = (req, res) => {
    //pass the updated article info in the body to mogoose' patch function
    ArticleModel.patchArticle(req.params.articleId, req.body)
        .then((article) => {
                     // returning a status code 200 which means call was successful
            // also sending results which is the updated article object returned from mongoose 
            console.log(article);
            res.status(200).send(article);
        });
};

/** remove article by Id  */
// req=request coming from the browser
// res=the data going back to browser
exports.removeById = (req, res) => {
    console.log(req.params);
    ArticleModel.removeById(req.params.articleId)
        .then((article) => {
            //if deleted, article object will be null here
            console.log(article);
            res.status(200).send(article);
        });
};

/** fetch article by id */
exports.getArticleById = (req, res) => {
    // req.params.id contains the article id that we need to find the article
    ArticleModel.findById(req.params.id)
        .then((article) => {
            console.log(article);
            res.status(200).send(article);
        });
};