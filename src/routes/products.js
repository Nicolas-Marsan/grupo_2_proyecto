const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require ('../controllers/productsController.js');
const multer = require('multer');
const productDetailMiddleware = require ('../middlewares/productDetailMiddleware');
const sinUsuarioMiddleware = require ('../middlewares/sinUsuarioMiddleware');
const validateCreateProductMiddlewares = require ('../middlewares/validateCreateProductMiddlewares');
const validateEditMiddlewares = require ('../middlewares/validateEditMiddlewares');



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

router.post('/comprar', productsController.comprar);

router.get('/verCarrito',sinUsuarioMiddleware,productsController.verCarrito);

router.post('/crearProducto', fileUpload.single('imagen'), validateCreateProductMiddlewares, productsController.guardarProduct);


router.get('/:id/edit', productDetailMiddleware, productsController.edit);
router.put('/:id/edit', validateEditMiddlewares, productsController.update);

router.delete('/:id', productsController.destroy);

router.post('/carrito/:id',sinUsuarioMiddleware,productsController.carrito);
router.post('/SacarCarrito/:id',productsController.sacarCarrito);


module.exports = router;