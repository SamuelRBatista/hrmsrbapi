const vacancyRepository = require('../../repositories/vacancy/vacancyRepository');

class VacancyService {
    async getAllVacancies() {
        return await vacancyRepository.getAllVacancies();
    }

    async getVacancyById(id) {
        return await vacancyRepository.getVacancyById(id);
    };

    async createVacancy(vacancyData) {
        // Qualquer lógica de validação ou transformação de dados pode ser feita aqui
        return await vacancyRepository.createVacancy(vacancyData);
    }

    async updateVacancy(id, updatedData) {
        // Qualquer lógica de validação ou transformação de dados pode ser feita aqui
        return await vacancyRepository.updateVacancy(id, updatedData);
    }

    async deleteVacancy(id) {
        return await vacancyRepository.deleteVacancy(id);
    }

    
}

module.exports = new VacancyService();