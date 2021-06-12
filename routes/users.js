const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require ('../controllers/usersController.js');
const multer = require('multer');

let storage = multer.diskStorage({    
	destination: (req,file,callback) => {
    let folder = path.join(__dirname, '../public/images/users');
    console.log(folder)
 callback(null, folder);
},
filename: (req,file,callback) =>{
    let imageName = file.fieldname +  Date.now() + path.extname(file.originalname);
 callback(null, imageName);
}
});

const fileUpload = multer({ storage });

router.get('/register', usersController.register);
router.post('/register', fileUpload.single('image'), usersController.updateR);



router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/profile', usersController.profile);


module.exports = router;