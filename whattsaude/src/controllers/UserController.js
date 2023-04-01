import User from '../models/User'

class UserController{
    async store(req, res){
        const {email, name, password, type} = req.body;
        const user = await User.create({
            email,
            name,
            password,
            type
        })
        return res.json(user)
    }
}

export default new UserController