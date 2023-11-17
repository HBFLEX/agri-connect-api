const router = require('express').Router();
const userController = require('../controllers/userController');
const authenticateRoute = require('../middleware/authenticateRoutes')



router.get('/', authenticateRoute, userController.getAllUsers);
router.get('/:id', authenticateRoute, userController.getOneUser);
router.get('/cooperatives/all', authenticateRoute, userController.getAgriCooperatives);
router.get('/farmers/all', authenticateRoute, userController.getFarmers);
router.post('/add', authenticateRoute, userController.addUser);
router.put('/update/:id', authenticateRoute, userController.updateUser);
router.delete('/delete/:id', authenticateRoute, userController.deleteUser)


module.exports = router;