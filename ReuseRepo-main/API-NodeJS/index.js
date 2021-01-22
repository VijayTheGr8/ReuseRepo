/** This is the main file for running node.js server. It contains all the route configs, middleware imports & responsible for running http server. */

/**reading the config from the file*/
const config = require('./common/config/env.config.js');

/**the process.env.PORT is provided by azure hosting environment at runtime. Without this, the node server will not work*/
config.port = process.env.PORT || config.port;

/** Before we can start using the express module, we need to make an object of it. */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

/** Import all the routes created by us here */
const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');
const ImageRouter = require('./image-tags/routes.config');
const ArticleRouter = require('./article/routes.config');


/** A middleware that listens to all the requests and adds CORS headers if not available */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

    /** Sometimes Client makes options request before making any other requests such as PUT and POST for security.  */

    /** If OPTIONS request, it sends response with 200 OK response, otherwise, request just mover to next middleware */
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

/** Parse incoming request bodies in a middleware before your handlers, available under the req.body property. */
app.use(bodyParser.json());

/** Parse http requests with content-type multipart/form-data, also known as file uploads. */
app.use(multipartMiddleware);

/** To check if user is authorized to perform the operation or not */
AuthorizationRouter.routesConfig(app);

/** parse the url and match with routes we have created in following files, and perform serve browser with appropriate http response. */
UsersRouter.routesConfig(app);
ImageRouter.routesConfig(app);
ArticleRouter.routesConfig(app);

console.log(config.port);

var server = app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});

module.exports = server;
