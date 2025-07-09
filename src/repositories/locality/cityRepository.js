const db = require('../../config/db');
const City = require('../../models/locality/cityModel');

class CityRepository {
    async getCityByStateId(stateId) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM city WHERE state_id = ?`; // Filtrando por state_id
            db.query(query, [stateId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const cities = result.map(row => new City(
                        row.id,                       
                        row.name,
                        row.acronym,                                              
                    ));
                    resolve(cities);
                }
            });
        });
    }
}

module.exports = new CityRepository(); 
