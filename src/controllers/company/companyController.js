const companyService = require('../../services/company/companyService');


const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyService.getAllCompanies();
        res.json(companies);
    } catch (error) {
        console.error('Error in getAllCompanies controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await companyService.getCompanyById(companyId);

        if (!company) {
            return res.status(404).json({ message: 'Empresa não encontrada' });
        }

        res.status(200).json(company);
    } catch (error) {
        console.error('Error in getCompanyById controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const createCompany = async (req, res) => {
    try {
        const newCompanyData = req.body; 
        const newCompanyId = await companyService.createCompany(newCompanyData);
        res.status(201).json({ id: newCompanyId, ...newCompanyData }); 
    } catch (error) {
        console.error('Error in createCompany controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateCompany = async (req, res) => {
    try {
        const companyId = req.params.id;
        const updatedData = req.body;
        const updatedCompany = await companyService.updateCompany(companyId, updatedData);
        
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Vaga não encontrada' });
        }

        res.status(200).json(updatedCompany);
    } catch (error) {
        console.error('Error in updateCompany controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.id;
        const deletedCompany = await companyService.deleteCompany(companyId);

        if (!deletedCompany) {
            return res.status(404).json({ message: 'Empresa não encontrada' });
        }

        res.status(200).json({ message: 'Empresa deletada com sucesso' });
    } catch (error) {
        console.error('Error in deleteCompany controller:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
};
