const path = require('path');
const vacancyService = require('../../services/vacancy/vacancyService');

// URL base para os arquivos
const baseUrl = 'http://localhost:3100/uploads/';

const formatBannerPath = (bannerPath) => {
    if (!bannerPath) return null;
    // Apenas substitua barras invertidas por barras normais, sem adicionar o URL base novamente
    return baseUrl + path.basename(bannerPath).replace(/\\/g, '/');
};

const getAllVacancies = async (req, res) => {
    try {
        const vacancies = await vacancyService.getAllVacancies();
        
        // Formate os dados das vagas para incluir o caminho completo do banner
        const formattedVacancies = vacancies.map(vacancy => ({
            ...vacancy,
            banner: formatBannerPath(vacancy.banner)
        }));

        res.json(formattedVacancies);
    } catch (error) {
        console.error('Error in getAllVacancies controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const getVacancyById = async (req, res) => {
    try {
        const vacancyId = req.params.id;
        const vacancy = await vacancyService.getVacancyById(vacancyId);

        if (!vacancy) {
            return res.status(404).json({ message: 'Vaga não encontrada' });
        }

        vacancy.banner = formatBannerPath(vacancy.banner);

        res.status(200).json(vacancy);
    } catch (error) {
        console.error('Error in getVacancyById controller:', error);
        res.status(500).json({ error: error.message });
    }
};

// Restante do código não precisa de alteração
const createVacancy = async (req, res) => {
    try {
        const { file } = req;
        const newVacancyData = req.body;
        const bannerPath = file ? file.path : null; // Caminho do banner, se enviado

        const newVacancyDataWithBanner = {
            ...newVacancyData,
            banner: bannerPath,
        };

        const newVacancyId = await vacancyService.createVacancy(newVacancyDataWithBanner);
        res.status(201).json({ id: newVacancyId, ...newVacancyDataWithBanner });
    } catch (error) {
        console.error('Error in createVacancy controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateVacancy = async (req, res) => {
    try {
        const vacancyId = req.params.id;
        const { file } = req;
        const updatedData = req.body;
        const bannerPath = file ? file.path : null; // Caminho do banner, se enviado

        const updatedDataWithBanner = {
            ...updatedData,
            banner: bannerPath,
        };

        const updatedVacancy = await vacancyService.updateVacancy(vacancyId, updatedDataWithBanner);
        
        if (!updatedVacancy) {
            return res.status(404).json({ message: 'Vaga não encontrada' });
        }

        res.status(200).json(updatedVacancy);
    } catch (error) {
        console.error('Error in updateVacancy controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteVacancy = async (req, res) => {
    try {
        const vacancyId = req.params.id;
        const deletedVacancy = await vacancyService.deleteVacancy(vacancyId);

        if (!deletedVacancy) {
            return res.status(404).json({ message: 'Vaga não encontrada' });
        }

        res.status(200).json({ message: 'Vaga deletada com sucesso' });
    } catch (error) {
        console.error('Error in deleteVacancy controller:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllVacancies,
    getVacancyById,
    createVacancy,
    updateVacancy,
    deleteVacancy
};
