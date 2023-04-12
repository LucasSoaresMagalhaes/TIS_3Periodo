import { Router } from 'express'
import UserController from './controllers/UserController'
import auth from './auth'


const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/users/login',auth.authenticate('local', { failureRedirect: '/login', failureMessage: true }) ,(req, res) => {
    return res.json({message: 'Usuário autenticado'})
})

routes.post('/logout', (req, res, next)=>{
    req.logout((err) => {
        if (err) {return next(err)}
        res.json({message:'Usuário deslogado'})
    })
})

export default routes