const candidateRepository = require('../../repositories/candidate/candidateRepository');

class CandidateService {
    async getAllCandidates() {
        return await candidateRepository.getAllCandidates();
    }

    async getCandidateById(id) {
        return await candidateRepository.getCandidateById(id);
    };

    async createCandidate(candidateData) {        
        return await candidateRepository.createCandidate(candidateData);
    }

    async updateCandidate(id, updatedData) {
        // Qualquer lógica de validação ou transformação de dados pode ser feita aqui
        return await candidateRepository.updateCandidate(id, updatedData);
    }

    async deleteCandidate(id) {
        return await candidateRepository.deleteCandidate(id);
    }
}

module.exports = new CandidateService();
