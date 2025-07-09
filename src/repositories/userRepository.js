const db = require('../config/db')
const User = require('../models/userModel')

class UserRepository{

    async getAllUsers(){
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM  users', (err, result) => {
                if(err){
                    reject(err);                    
                }else{
                    const users = result.map(row => new User (row.id, row.username, row.email, row.password, row.createAt, row.updateAt));
                    resolve(users)
                }
            });
        });
    }

    async createUser(user){
        return new Promise((resolve, reject) =>{
            const query = 'INSERT INTO users (username,email,password) VALUES(?,?,?)';
            db.query(query,[user.username, user.email, user.password],(err, results) =>{
                if(err){
                    return(err);
                }else{
                    resolve(new User(results.insertId, user.username, user.email, user.password));                    
                }
            });
        });
    }

     async getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE email = ?';
            db.query(query, [email], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    const users = results.map(row => new User(row.id, row.username, row.email, row.password, row.created_at, row.updated_at));
                    resolve(users);
                }
            });
        });
    }
}

module.exports = new UserRepository();