const UserModel = require('../models/users.model');
const crypto = require('crypto');

/**
 * Insert a new user into the database (register them)
 * 
 * @param {Object} req the http request
 * @param {Object} res the http response
 */
exports.register = (req, res) => {
    let quit = false;
    UserModel.findByEmail(req.body.email)
        .then((user) => {
            if (user[0]) {
                res.status(406).send({error: "An account with this email already exists"});
                quit = true;
            }
        });
    UserModel.findByEmail(req.body.username)
        .then((user) => {
            if (user[0]) {
                res.status(406).send({ error: "An account with this username already exists" });
                quit = true;
            }
        });
    if(quit) {
        return;
    }

    let salt = crypto.randomBytes(16).toString('base64');
    req.body.salt = salt;
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    req.body.hash = hash;
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        })
        .catch((err) => {
            res.status(406).send(err);
        });
};

/**
 * Search for a user based on ID
 * 
 * @param {Object} req the http request
 * @param {Object} res the http response
 */
exports.getById = (req, res) => {
    UserModel.findById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

/**
 * Update user data based on ID
 * 
 * @param {Object} req the http request
 * @param {Object} res the http response
 */
exports.patchById = (req, res) => {
    if (req.body.password) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
        req.body.password = salt + "$" + hash;
    }

    UserModel.patchUser(req.params.userId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

/**
 * Delete a user from the database based on ID
 * 
 * @param {Object} req the http request
 * @param {Object} res the http response
 */
exports.removeById = (req, res) => {
    UserModel.removeById(req.params.userId)
        .then((result)=>{
            res.status(204).send({});
        });
};