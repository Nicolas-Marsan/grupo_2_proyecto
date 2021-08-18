const express = require('express');
const router = express.Router();
const apiController = require ('../controllers/apiController');


router.get('/productos', apiController.list);
router.get('/productos/:id', apiController.product);


module.exports = router;