const express = require('express');
const router = express.Router();
const upload = require('../../middleware/uploadMiddleware');
const vacancyController = require('../../controllers/vacancy/vacancyController');
const authenticateToken = require('../../middleware/authMiddleware');





// Roteador
router.get('/vacancies', upload.single('banner'), vacancyController.getAllVacancies);
router.get('/vacancy/:id',upload.single('banner'), vacancyController.getVacancyById);
router.post('/vacancies', upload.single('banner'), vacancyController.createVacancy);
router.put('/vacancies/:id', upload.single('banner'), vacancyController.updateVacancy); // Middleware de upload
router.delete('/vacancies/:id', vacancyController.deleteVacancy);

module.exports = router;
