const express=require('express');

// const jwt = require('jsonwebtoken');

const router=express.Router();
const userController=require('../../../controllers/api/v1/users');
const passport = require('passport');

// router.use('/v1',require('./v1/index'));
router.post('/create-user',userController.createUser);
router.post('/create-session',userController.createSession);
router.post('/update-credentials',passport.authenticate('jwt',{session:false}),userController.updateUser);


module.exports=router;