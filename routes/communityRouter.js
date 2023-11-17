const router = require('express').Router();
const communityController = require('../controllers/communityController');
const authenticateRoute = require('../middleware/authenticateRoutes')


router.get('/', authenticateRoute, communityController.getAllCommunities);
router.get('/:id', authenticateRoute, communityController.getOneCommunity);
router.post('/add', authenticateRoute, communityController.addCommunity);
router.put('/update/:id', authenticateRoute, communityController.updateCommunity);
router.delete('/delete/:id', authenticateRoute, communityController.deleteCommunity);


module.exports = router;