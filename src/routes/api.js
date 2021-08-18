const express = require('express');
const router = express.Router();
const apiController = require ('../controllers/apiController');


router.get('/productos', apiController.list);
router.get('/users',apiController.users);


router.get('/productos/:id', apiController.product);
router.get('/users/:id',apiController.userId);


module.exports = router;