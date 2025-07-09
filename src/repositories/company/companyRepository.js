const db = require('../../config/db');
const Company= require('../../models/company/companyModel');

class CompanyRepository {
    async getAllCompanies() {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT company.*, city.name AS city_name, state.name AS state_name
                FROM company
                JOIN city ON company.city_id = city.id
                JOIN state ON company.state_id = state.id
            `;
            
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const companies = result.map(row => new Company(
                        row.id,
                        row.cnpj,
                        row.name,
                        row.description,
                        row.address,
                        row.city_name,
                        row.state_name,
                        row.phone,
                        row.email,
                        row.website
                    ));
                    resolve(companies);
                }
            });
        });
    }

    async getCompanyById(id) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT company.*, city.name AS city_name, state.name AS state_name
                FROM company
                JOIN city ON company.city_id = city.id
                JOIN state ON company.state_id = state.id
                WHERE company.id = ?
            `;
            
            db.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    resolve(null);  // Nenhuma empresa encontrada com o ID especificado
                } else {
                    const row = result[0];
                    const company = new Company(
                        row.id,
                        row.cnpj,
                        row.name,
                        row.description,
                        row.address,
                        row.city_name,
                        row.state_name,
                        row.phone,
                        row.email,
                        row.website
                    );
                    resolve(company);
                }
            });
        });
    }

    async createCompany(companyData) {
        return new Promise((resolve, reject) => {
            const { cnpj, name, description, address, city_id, state_id, phone, email, website } = companyData;
            const query = `
                INSERT INTO company (cnpj, name, description, address, city_id, state_id, phone, email, website)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            
            db.query(query, [cnpj, name, description, address, city_id, state_id, phone, email, website], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.insertId);
                }
            });
        });
    }

    async updateCompany(id, updatedData) {
        return new Promise((resolve, reject) => {

            const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

            const { cnpj, name, description, address, city_id, state_id, phone, email, website} = updatedData;

            const query = `
                UPDATE company
                SET cnpj = ?, name =?, description = ?, address = ?, city_id = ?, state_id = ?, phone = ?, email = ?, website = ?
                WHERE id = ?
            `;

            db.query(query, [cnpj, name, description, address, city_id, state_id, phone, email, website, id], (err, result) => {
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

    async deleteCompany(id) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM company WHERE id = ?';

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

module.exports = new CompanyRepository();
