const UsersController = require('./controllers/users.controller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const config = require('../common/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;
const NORMAL = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function (app) {
    app.post('/users/insert', [
        UsersController.insert
    ]);
    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.requirePermissionLevel(NORMAL),
        PermissionMiddleware.requireSameUser,
        UsersController.getById
    ]);
    app.patch('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.requirePermissionLevel(NORMAL),
        PermissionMiddleware.requireSameUser,
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.requirePermissionLevel(ADMIN),
        UsersController.removeById
    ]);
};
