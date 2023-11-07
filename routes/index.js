const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();


router.get('/', homeController.handleRoute);
router.use('/api',require('./api'));

module.exports= router;