const router = require('express').Router();
const productStatusController = require('../controllers/productStatusController');
const authenticateRoute = require('../middleware/authenticateRoutes')


router.get('/', authenticateRoute, productStatusController.getAllProductStatus);
router.get('/:id', authenticateRoute, productStatusController.getOneProductStatus);
router.post('/add', authenticateRoute, productStatusController.addProductStatus);
router.put('/update/:id', authenticateRoute, productStatusController.updateProductStatus);
router.delete('/delete/:id', authenticateRoute, productStatusController.deleteProductStatus);



module.exports = router;