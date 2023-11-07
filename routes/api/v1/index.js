const express=require('express');


const router=express.Router();
const userController=require('../../../controllers/api/v1/users');

// router.use('/v1',require('./v1/index'));
router.post('/create-user',userController.createUser)    

module.exports=router;