const stateRepository = require('../../repositories/locality/stateRepository');

class StateService {
    async getAllState() {
        return await stateRepository.getAllState();
    }  
    
    async getStatesWithCities(stateId){
        return await stateRepository.getStatesWithCities(stateId);
    }
}
module.exports = new StateService();