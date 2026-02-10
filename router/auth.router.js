const express = require('express');


const {loginHandler,singnupHandler} = require('../controllers/authControllers');



const loginRouter = express.Router();
const signupRouter = express.Router();

loginRouter.route("/")
    .post(loginHandler)
  
signupRouter.route("/")
    .post(singnupHandler)    


module.exports = {loginRouter,signupRouter};