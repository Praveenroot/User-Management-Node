const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Create, Find, Update, Delete
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.get('/:id', userController.delete);
router.get('/viewuser/:id', userController.viewall);


module.exports = router;