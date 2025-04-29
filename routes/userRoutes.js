const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validate = require('../middleware/validate');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', validate, userController.createUser);
router.put('/:id', validate, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;