const { users } = require('../models/users')

class userController {
    
    async createUser (req, res) {
        try {
            const registerUser = new users(req.body)
            await registerUser.save()
            res.status(201).json(registerUser)
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = new userController