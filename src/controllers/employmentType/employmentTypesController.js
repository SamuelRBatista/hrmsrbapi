const employmentTypesService = require('../../services/employmentType/employmentTypesService');


const getAllEmploymentTypes = async (req, res) => {
    try {
        const employmentTypes = await employmentTypesService.getAllEmploymentTypes();
        res.json(employmentTypes);
    } catch (error) {
        console.error('Error in getAllEmploymentTypes controller:', error);
        res.status(500).json({ error: error.message });
    }
};

// const createCompany = async (req, res) => {
//     try {
//         const newCompanyData = req.body; // Supondo que os dados da nova empresa estão no corpo da requisição
//         const newCompanyId = await companyService.createCompany(newCompanyData);
//         res.status(201).json({ id: newCompanyId, ...newCompanyData }); // Responder com o ID da nova empresa e os dados fornecidos
//     } catch (error) {
//         console.error('Error in createCompany controller:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports = {
    getAllEmploymentTypes,
 
};
