const employmentTypesRepository = require('../../repositories/employmentType/employmentTypesRepository');

class EmploymentTypesService {
    async getAllEmploymentTypes() {
        return await employmentTypesRepository.getAllEmploymentTypes();
    }   
}
module.exports = new  EmploymentTypesService();