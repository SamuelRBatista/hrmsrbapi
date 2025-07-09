const express = require('express');
const router = express.Router();
const companyController = require('../../controllers/company/companyController');
const authenticateToken = require('../../middleware/authMiddleware');


router.get('/companies', companyController.getAllCompanies);
router.get('/company/:id', companyController.getCompanyById);
router.post('/company', companyController.createCompany);
router.put('/company/:id', companyController.updateCompany);
router.delete('/company/:id', companyController.deleteCompany);
 

module.exports = router;