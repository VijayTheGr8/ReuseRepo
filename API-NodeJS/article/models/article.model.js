/** This file comtains mongoose schema and some useful methods to communicate with database for article */

const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

/** articles schema starts here */
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

/** articles schema ends here */

/** convert type of @field _id of ObjectId to hex string and returns as a new virtual field @field 'id' */
articleSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

/** Find article by id */
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

/** save article in database */
exports.createArticle = (articleData) => {
    const article = new Article(articleData);
    return article.save();
};

/** Filter and or order articles by tags and / or userId */
exports.filter = (query) => {
    return new Promise((resolve, reject) => {
        const filterQuery = [];
        // condition ? value if true 
        // if query.sort is present then set query.sort.field = "udpateAt".  field is a column in table 
        // if query.sort is present then set query.sort.order = -1 which is descending
        const sort = { [query.sort ? query.sort.field : 'updatedAt']: query.sort ? query.sort.order : -1 };
        // if there is a query object and queryobject has at least one tag then add the tag to the filter 
        if (query && query.tags) {
            //loops through the array of tags and add them to filter
            filterQuery.push({ 'tags.name': { $in: query.tags.map((tag) => new RegExp(tag.name, "i")) } });
        }
        // if there is a query object and query has user id then we add the userid criteria to limit articles to that user
        if (query && query.userId) {
            filterQuery.push({ userId: query.userId })
        }
        Article
            .find(
                filterQuery.length ? { $or: filterQuery } : {}
            ).sort(sort)
            .exec(function (err, articles) {
                if (err) {
                    //if there is any error exeucing query then return error
                    reject(err);
                } else {
                    //if there is no err then we have articles feteched from datastore
                    resolve(articles);
                }
            });
    });
}

/** update article */
exports.patchArticle = (id, articleData) => {
    return Article.findOneAndUpdate({
        _id: id
    }, articleData, { new: true, useFindAndModify: false });
};

/** remove article by Id */
exports.removeById = (articleId) => {
    console.log(articleId);
    return new Promise((resolve, reject) => {
        Article.deleteOne({ _id: articleId }, (err) => {
            console.log(err)
            //if err object is null then mongoose was successful in deleting the article
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

