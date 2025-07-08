const stateService = require('../../services/locality/stateService');

const getAllState = async (req, res) => {
    try {
        const state = await stateService.getAllState();
        res.json(state);
    } catch (error) {
        console.error('Error in getAllState controller:', error);
        res.status(500).json({ error: error.message });
    }
};

const  getStatesWithCities = async ( req, res) => {
    const stateId = req.params.id;
    console.log(stateId);
    try {
        const state = await stateService.getStatesWithCities(stateId);
        res.json(state);        
    }catch ( error) {
        console.error('Error in getAllState controller:', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getAllState,
  getStatesWithCities
};