import { Router } from 'express'
import UserController from './controllers/UserController'
import auth from './auth'


const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/users/login',auth.authenticate('local', { failureRedirect: '/login', failureMessage: true }) ,(req, res) => {
    const {email, password} = req.body
    return res.json(email)
})

export default routes