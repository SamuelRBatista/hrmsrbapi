// src/services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    
    async login(email, password) {
        const users = await userRepository.getUserByEmail(email);
        if (users.length === 0) {
            throw new Error('User not found');
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        return { token };
    }

    async register(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { username, email, password: hashedPassword };
        const newUser = await userRepository.createUser(user);
        return newUser;
    }
}

module.exports = new AuthService();
