const router = require('express').Router();
const productController = require('../controllers/productConttoller');



router.get('/', productController.getAllProducts);
router.get('/:id', productController.getOneProduct);
router.post('/add/', productController.addProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);


module.exports = router;