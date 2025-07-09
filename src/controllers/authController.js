const authService = require('../services/authService');

class AuthController {
    
    async login(req, res) {
        try {
            const { email, password } = req.body;       
            const { token } = await authService.login(email, password);
            res.json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    async register(req, res) {
        const { username, email, password } = req.body;
        try {
            const user = await authService.register(username, email, password);
            res.status(201).json({ message: 'User created successfully', user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();
