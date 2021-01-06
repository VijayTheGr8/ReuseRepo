const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    description: String,
    tags: [{
        name: String,
        category: {
            type: String,
            enum: ['garbage', 'recyclable', 'unknown'],
            default: 'unknown'
        }
    }],
    image: String
});

articleSchema.virtual('id').get(function () {
    return this._id.toHexString();
});


articleSchema.findById = function (cb) {
    return this.model('Articles').find({ id: this.id }, cb);
};

const Article = mongoose.model('Articles', articleSchema);

exports.findById = (id) => {
    return Article.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createArticle = (articleData) => {
    const article = new Article(articleData);
    return article.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Article.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, articles) {
                if (err) {
                    reject(err);
                } else {
                    resolve(articles);
                }
            })
    });
};

exports.filterByTags = (tags) => {
    console.log(tags);
    return new Promise((resolve, reject) => {
        Article
            .find({ 'tags.name': { $in: tags.map((tag) => new RegExp(tag.name, "i")) } })
            .exec(function (err, articles) {
                if (err) {
                    reject(err);
                } else {
                    resolve(articles);
                }
            });
    });
}

exports.patchArticle = (id, articleData) => {
    return Article.findOneAndUpdate({
        _id: id
    }, articleData);
};

exports.removeById = (articleId) => {
    return new Promise((resolve, reject) => {
        Article.deleteMany({ _id: articleId }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

