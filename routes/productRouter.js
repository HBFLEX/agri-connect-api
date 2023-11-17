const router = require('express').Router();
const productController = require('../controllers/productController');
const authenticateRoute = require('../middleware/authenticateRoutes')



router.get('/', authenticateRoute, productController.getAllProducts);
router.get('/:id', authenticateRoute, productController.getOneProduct);
router.post('/add/', authenticateRoute, productController.addProduct);
router.put('/update/:id', authenticateRoute, productController.updateProduct);
router.delete('/delete/:id', authenticateRoute, productController.deleteProduct);


module.exports = router;