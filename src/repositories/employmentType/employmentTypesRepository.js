const db = require('../../config/db');
const EmploymentType= require('../../models/employmentType/employmentTypeModel');

class EmploymentTypeRepository {
    async getAllEmploymentTypes() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM employment_types`;
            
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const employmentTypes = result.map(row => new EmploymentType(
                        row.id,                      
                        row.type_name,
                     
                    ));
                    resolve(employmentTypes );
                }
            });
        });
    }

   
}

module.exports = new EmploymentTypeRepository();
