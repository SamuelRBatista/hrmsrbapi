const express = require('express');
const router  = express.Router();
const employmentTypesController = require('../../controllers/employmentType/employmentTypesController');
const authenticateToken = require('../../middleware/authMiddleware');


router.get('/employment_types', employmentTypesController.getAllEmploymentTypes);

module.exports = router;