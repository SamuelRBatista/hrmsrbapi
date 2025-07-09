const cityService = require('../../services/locality/cityService');

const getCityByStateId = async (req, res) => {
    const stateId = req.params.id;
    try {
        const cities = await cityService.getCityByStateId(stateId);
        res.json(cities);
    } catch (error) {
        console.error('Error in getCityByStateId controller:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCityByStateId
};