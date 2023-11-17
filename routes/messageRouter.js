const router = require('express').Router();
const messageController = require('../controllers/messageController');
const authenticateRoute = require('../middleware/authenticateRoutes')


router.get('/', authenticateRoute, messageController.getAllMessages);
router.get('/:id', authenticateRoute, messageController.getOneMessage);
router.post('/add', authenticateRoute, messageController.addMessage);
router.put('/update/:id', authenticateRoute, messageController.updateMessage);
router.delete('/delete/:id', authenticateRoute, messageController.deleteMessage);


module.exports = router;