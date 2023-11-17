const router = require('express').Router();
const postController = require('../controllers/postController');
const authenticateRoute = require('../middleware/authenticateRoutes')


router.get('/', authenticateRoute, postController.getAllPosts);
router.get('/:id', authenticateRoute, postController.getOnePost);
router.post('/add', authenticateRoute, postController.addPost);
router.put('/update/:id', authenticateRoute, postController.updatePost);
router.delete('/delete/:id', authenticateRoute, postController.deletePost);


module.exports = router;