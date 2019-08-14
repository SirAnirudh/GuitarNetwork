const AuthController = require('./controllers/AuthController');
const AuthenticationControllerPolicy = require('./policies/AuthControllerPolicy');

module.exports = (app) => {
    //define an endpoint with a get request and what it sends
    app.post('/register', AuthenticationControllerPolicy.register, AuthController.register)
    app.post('/login', AuthController.login)
    
};

