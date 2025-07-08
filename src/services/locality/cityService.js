const cityRepository = require('../../repositories/locality/cityRepository');

class CityService {
    async getCityByStateId(stateId) {
        return await cityRepository.getCityByStateId(stateId);
    }   
}
module.exports = new CityService();