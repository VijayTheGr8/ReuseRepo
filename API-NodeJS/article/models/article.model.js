const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    description: String,
    userId: String,
    tags: [{
        name: String,
        category: {
            type: String,
            enum: ['garbage', 'recyclable', 'unknown'],
            default: 'unknown'
        }
    }],
    image: String,
    updatedAt: String,
    createdAt: String,
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

exports.filter = (query) => {
    return new Promise((resolve, reject) => {
        const filterQuery = [];
        const sort = { [query.sort ? query.sort.field : 'updatedAt']: query.sort ? query.sort.order : -1 };
        if (query && query.tags) {
            filterQuery.push({ 'tags.name': { $in: query.tags.map((tag) => new RegExp(tag.name, "i")) } });
        }
        if (query && query.userId) {
            filterQuery.push({ userId: query.userId })
        }
        Article
            .find(
                filterQuery.length ? { $or: filterQuery } : {}
            ).sort(sort)
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
    }, articleData, { new: true, useFindAndModify: false });
};

exports.removeById = (articleId) => {
    console.log(articleId);
    return new Promise((resolve, reject) => {
        Article.deleteOne({ _id: articleId }, (err) => {
            console.log(err)
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

