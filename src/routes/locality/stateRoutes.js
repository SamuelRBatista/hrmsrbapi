const express = require('express');
const router  = express.Router();
const stateController = require('../../controllers/locality/stateController');
const authenticateToken = require('../../middleware/authMiddleware');


router.get('/state', stateController.getAllState);
router.get('/state/:id', stateController.getStatesWithCities);

module.exports = router;