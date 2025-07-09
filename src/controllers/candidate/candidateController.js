const candidateService = require('../../services/candidate/candidateService');


const getAllCandidates = async (req, res) => {
    try {
        const candidates = await candidateService.getAllCandidates();
        res.json(candidates);
    } catch (error) {
        console.error('Error in getAllCandidates controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const getCandidateById = async (req, res) => {
    try {
        const candidateId = req.params.id;
        const candidate = await candidateService.getCandidateById(candidateId);

        if (!candidate) {
            return res.status(404).json({ message: 'Candidato não encontrada' });
        }

        res.status(200).json(candidate);
    } catch (error) {
        console.error('Error in getCandidateById controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const createCandidate = async (req, res) => {
    try {
        const newCandidateData = req.body; 
        const newCandidateId = await candidateService.createCandidate(newCandidateData);
        res.status(201).json({ id: newCandidateId, ...newCandidateData }); 
    } catch (error) {
        console.error('Error in createCandidate controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateCandidate = async (req, res) => {
    try {
        const candidateId = req.params.id;
        const updatedData = req.body;
        const updatedCandidate = await candidateService.updateCandidate(candidateId, updatedData);
        
        if (!updatedCandidate) {
            return res.status(404).json({ message: 'Candidato não encontrada' });
        }

        res.status(200).json(updatedCandidate);
    } catch (error) {
        console.error('Error in updateCandidate controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteCandidate = async (req, res) => {
    try {
        const candidateId = req.params.id;
        const deletedCandidate = await candidateService.deleteCandidate(candidateId);

        if (!deletedCandidate) {
            return res.status(404).json({ message: 'Candidato não encontrada' });
        }

        res.status(200).json({ message: 'Candidato deletada com sucesso' });
    } catch (error) {
        console.error('Error in deleteCandidate controller:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCandidates,
    getCandidateById,
    createCandidate,
    updateCandidate,
    deleteCandidate
};
