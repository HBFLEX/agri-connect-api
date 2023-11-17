const router = require('express').Router();
const likeController = require('../controllers/likeController');
const authenticateRoute = require('../middleware/authenticateRoutes')


router.get('/', authenticateRoute, likeController.getAllLikes);
router.get('/:id', authenticateRoute, likeController.getOneLike);
router.post('/add', authenticateRoute, likeController.addLike);
router.put('/update/:id', authenticateRoute, likeController.updateLike);
router.delete('/delete/:id', authenticateRoute, likeController.deleteLike);

module.exports = router;