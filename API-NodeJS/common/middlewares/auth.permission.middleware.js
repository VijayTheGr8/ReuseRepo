const jwt = require('jsonwebtoken'),
    secret = require('../config/env.config')['jwt_secret'];

const ADMIN_PERMISSION = require('../config/env.config').permissionLevels.ADMIN;

/**
 * Check that the user has a certain level of permission before continuing the request
 * 
 * @param {Number} requiredLevel - the minimum required permission level
 * @returns {Object} an http response if theres an error, the return value of the next callback otherwise
 */
exports.requirePermissionLevel = (requiredLevel) => {
    return (req, res, next) => {
        let userPermission = parseInt(req.jwt.permission);
        if (userPermission >= requiredLevel) {
            return next();
        } else {
            return res.status(403).send({errors: "Not enough permissions"});
        }
    };
};

/**
 * Check that the request is pulling data from the same user
 * that made the request, or that the request came from an admin
 * 
 * @param {Object} req - the http request
 * @param {Object} res - the http response
 * @param {Function} next - a callback to the next function to be run
 * @returns {Object} an http response if error, the return value of the callback otherwise
 */
exports.requireSameUser = (req, res, next) => {
    let userPermission = parseInt(req.jwt.permission);
    let userId = req.jwt.userId;
    if (req.params && req.params.userId && userId === req.params.userId) {
        return next();
    } else {
        if (userPermission >= ADMIN_PERMISSION) {
            return next();
        } else {
            return res.status(403).send({errors: "Not same user and not admin"});
        }
    }

};