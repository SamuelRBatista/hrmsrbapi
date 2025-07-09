const db = require('../../config/db');
const Vacancy = require('../../models/vacancy/vacancyModel');

class VacancyRepository {   

    async getAllVacancies() {
        return new Promise((resolve, reject) => {
            const query = `
                                 SELECT
                        v.id AS id,
                        v.title AS title,
                        v.description AS description,
                        v.address AS address,
                        city.name AS city_name,
                        state.name AS state_name,
                        v.salary AS salary,
                        et.type_name AS employment_type_name,
                        c.name AS company_name,
                        v.banner AS banner,                       
                        v.created_at AS created_at,
                        v.updated_at AS updated_at
                    FROM
                        vacancy v
                    LEFT JOIN city ON v.city_id = city.id
                    LEFT JOIN state ON v.state_id = state.id
                    LEFT JOIN employment_types et ON v.employment_type_id = et.id
                    LEFT JOIN company c ON v.company_id = c.id;
            `;

            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const vacancies = result.map(row => new Vacancy(
                        row.id,
                        row.title,
                        row.description,
                        row.address,                       
                        row.city_name,
                        row.state_name,
                        row.salary,
                        row.employment_type_name,  // Nome do tipo de emprego
                        row.company_name, 
                        row.banner,         // Nome da empresa
                        row.created_at,
                        row.updated_at
                    ));
                    resolve(vacancies);
                }
            });
        });
    }

    async getVacancyById(id) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT
                    v.id AS id,
                    v.title AS title,
                    v.description AS description,
                    v.address AS address,
                    city.name AS city_name,
                    state.name AS state_name,
                    v.salary AS salary,
                    et.type_name AS employment_type_name,
                    c.name AS company_name,
                    v.banner AS banner,
                    v.created_at AS created_at,
                    v.updated_at AS updated_at
                FROM
                    vacancy v
                LEFT JOIN city ON v.city_id = city.id
                LEFT JOIN state ON v.state_id = state.id
                LEFT JOIN employment_types et ON v.employment_type_id = et.id
                LEFT JOIN company c ON v.company_id = c.id
                WHERE v.id = ?;
            `;

            db.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    resolve(null);  // Nenhuma vaga encontrada com o ID especificado
                } else {
                    const row = result[0];
                    const vacancy = new Vacancy(
                        row.id,
                        row.title,
                        row.description,
                        row.address,                       
                        row.city_name,
                        row.state_name,
                        row.salary,
                        row.employment_type_name,  // Nome do tipo de emprego
                        row.company_name,
                        row.banner,          
                        row.created_at,
                        row.updated_at
                    );
                    resolve(vacancy);
                }
            });
        });
    } 
 
    async createVacancy(vacancyData) {
        return new Promise((resolve, reject) => {
            const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
            const { title, description, address, city_id, state_id, salary, employment_type_id, company_id, banner } = vacancyData;
    
            if (!employment_type_id || !company_id) {
                reject(new Error('Employment type ID or Company ID is undefined'));
                return;
            }
    
            const query = `
                INSERT INTO vacancy (title, description, address, city_id, state_id, salary, employment_type_id, company_id, banner, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
    
            db.query(query, [title, description, address, city_id, state_id, salary, employment_type_id, company_id, banner, currentDate, currentDate], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.insertId);
                }
            });
        });
    }
    
    async updateVacancy(id, updatedData) {
        return new Promise((resolve, reject) => {
            const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

            const { title, description, address, city_id, state_id, salary, employment_type_id, company_id, banner } = updatedData;

            const query = `
                UPDATE vacancy
                SET title = ?, description = ?, address = ?, city_id = ?, state_id = ?, salary = ?, employment_type_id = ?, company_id = ?, banner = ?, updated_at = ?
                WHERE id = ?
            `;

            db.query(query, [title, description, address, city_id, state_id, salary, employment_type_id, company_id, banner, currentDate, id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.affectedRows === 0) {
                    resolve(null);  // Nenhuma vaga encontrada com o ID especificado
                } else {
                    resolve(result.affectedRows);
                }
            });
        });
    }

    async deleteVacancy(id) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM vacancy WHERE id = ?';
            db.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.affectedRows === 0) {
                    resolve(null);  // Nenhuma vaga encontrada com o ID especificado
                } else {
                    resolve(result.affectedRows);
                }
            });
        });
    }

    
    

}



module.exports = new VacancyRepository();
