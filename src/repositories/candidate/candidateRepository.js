const db = require('../../config/db');
const Candidate = require('../../models/candidate/candidateModel');

class CandidateRepository {

    async getAllCandidates() {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM candidates
            `;
            
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const candidates = result.map(row => new Candidate(
                        row.id,
                        row.name,
                        row.email,
                        row.phone,
                        row.birth_date,
                        row.experience,
                        row.education,
                        row.application_status,
                        row.created_at,
                        row.updated_at
                    ));
                    resolve(candidates);
                }
            });
        });
    }

    async getCandidateById(id) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM candidates
                WHERE id = ?
            `;
            
            db.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    resolve(null);  // No candidate found with the specified ID
                } else {
                    const row = result[0];
                    const candidate = new Candidate(
                        row.id,
                        row.name,
                        row.email,
                        row.phone,
                        row.birth_date,
                        row.experience,
                        row.education,
                        row.application_status,
                        row.created_at,
                        row.updated_at
                    );
                    resolve(candidate);
                }
            });
        });
    }

    async createCandidate(candidateData) {
        return new Promise((resolve, reject) => {
            // Gera a data atual no formato ISO 8601
            const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
            // Desestrutura os dados da vaga e adiciona as datas
            const { name, email, phone, birth_date, experience, education, application_status } = candidateData;

            // if (!employment_type_id || !company_id) {
            //     reject(new Error('Employment type ID or Company ID is undefined'));
            //     return;
            // }
            const query = `
            INSERT INTO candidates (name, email, phone, birth_date, experience, education, application_status, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
          
            
            // Passa as datas geradas para o INSERT
            db.query(query, [name, email, phone, birth_date, experience, education, application_status,currentDate, currentDate], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.insertId);
                }
            });
        });
    }            

    async updateCandidate(id, updatedData) {
        return new Promise((resolve, reject) => {

            const { name, email, phone, birth_date, experience, education, application_status } = updatedData;

            const query = `
                UPDATE candidates
                SET name = ?, email = ?, phone = ?, birth_date = ?, experience = ?, education = ?, application_status = ?
                WHERE id = ?
            `;

            db.query(query, [name, email, phone, birth_date, experience, education, application_status, id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.affectedRows === 0) {
                    resolve(null);  // No candidate found with the specified ID
                } else {
                    resolve(result.affectedRows);
                }
            });
        });
    }

    async deleteCandidate(id) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM candidates WHERE id = ?';

            db.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.affectedRows === 0) {
                    resolve(null);  // No candidate found with the specified ID
                } else {
                    resolve(result.affectedRows);
                }
            });
        });
    }
}

module.exports = new CandidateRepository();
