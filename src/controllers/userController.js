const userService = require('../services/userServices')

class UserController{

  async getAllUsers(req, res){
    try{
        const users = await userService.getAllUsers();
        res.json(users);
    }catch (error){
        res.status(500).json({error:error.message});
    }
  }

  async createUser(req, res){
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json(user)
    }catch (error){
        res.status(500).json({erro:error.message});
    }
  }
}
module.exports = new UserController();