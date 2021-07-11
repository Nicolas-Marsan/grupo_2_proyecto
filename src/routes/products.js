const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require ('../controllers/productsController.js')
const multer = require('multer');
const productDetailMiddleware = require ('../middlewares/productDetailMiddleware')

let multerDiskStorage = multer.diskStorage({    
	destination: (req,file,callback) => 
{let folder = path.join(__dirname, '../../public/images/products');
 callback(null,folder);
},
filename: (req,file,callback) =>
{let imageName = file.fieldname +  Date.now() + path.extname(file.originalname);
 callback(null,imageName);
}
});

let fileUpload = multer({storage: multerDiskStorage});


router.get('/', productsController.index);

router.get('/detail/:id', productsController.productDetail);

router.get('/productCart', productsController.productCart);

router.get('/crearProducto', productsController.crearProduct);

router.post('/crearProducto', fileUpload.single('imagen'), productsController.guardarProduct);


router.get('/:id/edit', productDetailMiddleware, productsController.edit);
router.put('/:id/edit', /* fileUpload.single('foto'), */ productsController.update)

router.delete('/:id', productsController.destroy)


module.exports = router;