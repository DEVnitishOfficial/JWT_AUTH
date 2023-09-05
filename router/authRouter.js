const express = require ('express');
const authRouter = express.Router();
const {signup,signin, getUserInfo,logOut} = require('../controllers/authController');
const jwtAuth = require('../middleware/jwtAuth');

authRouter.post('/signup',signup);
authRouter.post('/signin',signin);
authRouter.get('/user',jwtAuth,getUserInfo)
authRouter.get('/logout',jwtAuth,logOut)

module.exports = authRouter;