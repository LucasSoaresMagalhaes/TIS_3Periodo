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

    async findOne(req, res){
        const {email, password} = req.body
        const query = User.where({email: email})
        const user = await query.findOne()
        if(user.password == password){
            return res.status(200).json(user)
        }
        else{
            return res.status(404).json({
                message: 'Usuário não encontrado'
            })
        }
    }
}

export default new UserController