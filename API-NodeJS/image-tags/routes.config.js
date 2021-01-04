const config = require('../common/config/env.config');
const ImageController = require('./controllers/image.controller');

exports.routesConfig = function (app) {
    app.post('/image-extract', [
        ImageController.extract
    ]);
};
