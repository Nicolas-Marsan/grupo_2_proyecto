const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require ('../controllers/productsController.js')
const multer = require('multer');

let multerDiskStorage = multer.diskStorage({    
	destination: (req,file,callback) => 
{let folder = path.join(__dirname, '../public/images');
 callback(null,folder);
},
	filename: (req,file,callback) =>
{let imageName = Date.now() + path.extname(file.originalname);
 callback(null,imageName);
},
});

let fileUpload = multer({storage: multerDiskStorage});


router.get('/', productsController.index);

router.get('/productDetail', productsController.productDetail);

router.get('/productCart', productsController.productCart);

router.get('/crearProducto', productsController.crearProduct);

router.post('/crearProducto', fileUpload.single('foto'), productsController.guardarProduct);
module.exports = router;