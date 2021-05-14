const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require ('../controllers/productsController.js')

router.get('/productDetail', productsController.productDetail);

router.get('/productCart', productsController.productCart);

module.exports = router;