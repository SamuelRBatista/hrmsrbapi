const companyRepository = require('../../repositories/company/companyRepository');

class CompanyService {
    async getAllCompanies() {
        return await companyRepository.getAllCompanies();
    }

    async getCompanyById(id) {
        return await companyRepository.getCompanyById(id);
    };

    async createCompany(companyData) {        
        return await companyRepository.createCompany(companyData);
    }

    async updateCompany(id, updatedData) {
        // Qualquer lógica de validação ou transformação de dados pode ser feita aqui
        return await companyRepository.updateCompany(id, updatedData);
    }

    async deleteCompany(id) {
        return await companyRepository.deleteCompany(id);
    }
}

module.exports = new CompanyService();
