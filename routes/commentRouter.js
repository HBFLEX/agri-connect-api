const router = require('express').Router();
const commentController = require('../controllers/commentController');
const authenticateRoute = require('../middleware/authenticateRoutes')


router.get('/', authenticateRoute, commentController.getAllComments);
router.get('/:id', authenticateRoute, commentController.getOneComment);
router.post('/add', authenticateRoute, commentController.addComment);
router.put('/update/:id', authenticateRoute, commentController.updateComment);
router.delete('/delete/:id', authenticateRoute, commentController.deleteComment);

module.exports = router;