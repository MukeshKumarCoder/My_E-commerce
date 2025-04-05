const routes = require("express").Router();
const { signUp, login } = require("../Controllers/UserController");
// const { auth } = require('../Middleware/authMiddleware');

// User routes
routes.post("/signup", signUp);
routes.post("/login", login);

module.exports = routes;
