const express = require('express');
const router  = express.Router();
const cityController = require('../../controllers/locality/cityController');
const authenticateToken = require('../../middleware/authMiddleware');


router.get('/cities/:id', cityController.getCityByStateId);

module.exports = router;