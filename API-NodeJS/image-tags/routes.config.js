/** This file containes route for extracting the tags from image  */

const ImageController = require('./controllers/image.controller');

exports.routesConfig = function (app) {
    app.post('/image-extract', [
        ImageController.extract
    ]);
};
