const express = require('express');
const router = express.Router();
const candidateController = require('../../controllers/candidate/candidateController');
const authenticateToken = require('../../middleware/authMiddleware');


router.get('/candidates', candidateController.getAllCandidates);
router.get('/candidate/:id', candidateController.getCandidateById);
router.post('/candidate', candidateController.createCandidate);
router.put('/candidate/:id', candidateController.updateCandidate);
router.delete('/candidate/:id', candidateController.deleteCandidate);
 

module.exports = router;