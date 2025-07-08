const db = require('../../config/db');
const State = require('../../models/locality/stateModel');

class StateRepository {
    async getAllState() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM state`;            
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const state = result.map(row => new State(
                        row.id,                       
                        row.name,
                        row.acronym                      
                    ));
                    resolve(state);
                }
            });
        });
    }

    async getStatesWithCities(stateId) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    state.id AS state_id,
                    state.name AS state_name,
                    state.acronym AS state_acronym,
                    city.id AS city_id,
                    city.name AS city_name
                FROM 
                    state
                LEFT JOIN 
                    city ON city.state_id = state.id
                WHERE 
                    state.id = ? OR state.acronym = ?`;

            db.query(query, [stateId, stateId], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    resolve(null); // Nenhum estado encontrado
                } else {
                    // Agrupar as cidades por estado
                    const stateData = {
                        id: result[0].state_id,
                        name: result[0].state_name,
                        acronym: result[0].state_acronym,
                        cities: result
                            .filter(row => row.city_id) // Filtrar para ignorar cidades nulas (se houver LEFT JOIN)
                            .map(row => ({
                                id: row.city_id,
                                name: row.city_name
                            }))
                    };
                    resolve(stateData);
                }
            });
        });
    }

}
module.exports = new StateRepository();
