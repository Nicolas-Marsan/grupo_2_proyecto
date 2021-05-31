const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require ('../controllers/productsController.js')
const multer = require('multer');
const productDetailMiddleware = require ('../middlewares/middlewares')

let multerDiskStorage = multer.diskStorage({    
	destination: (req,file,callback) => 
{let folder = path.join(__dirname, '../public/images/products');
 callback(null,folder);
},
filename: (req,file,callback) =>
{let imageName = file.fieldname +  Date.now() + path.extname(file.originalname);
 callback(null,imageName);
}
});





let fileUpload = multer({storage: multerDiskStorage});


router.get('/', productsController.index);

router.get('/detail/:id',productDetailMiddleware, productsController.productDetail);

router.get('/productCart', productsController.productCart);

router.get('/crearProducto', productsController.crearProduct);

router.post('/crearProducto', fileUpload.single('foto'), productsController.guardarProduct);
module.exports = router;