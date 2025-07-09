const userRepository = require('../repositories/userRepository')
const bcrypt = require('bcrypt');

class UserService{
    async getAllUsers(){
        return await userRepository.getAllUsers();
    }

    async createUser(userData){
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        const user = {
            username:userData.username,
            email:userData.email,
            password:hashedPassword,
        };
        return await userRepository.createUser(user)
    }
}
module.exports = new UserService();

