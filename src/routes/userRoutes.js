// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');


// Rotas protegidas
router.get('/users', authenticateToken, userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
