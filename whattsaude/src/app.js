import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import cors from 'cors'
import expressSession from 'express-session'

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
        mongoose.connect('mongodb+srv://whattsaude:Kh2ylBNgXlDh3CNF@cluster0.k3kvakk.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })


    }
    middlewares() {
        this.server.use(cors())
        this.server.use(express.json())
        this.server.use(expressSession({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            cookie: { secure: true }
        }))
        
    }

    routes() {
        this.server.use(routes)
    }

}


export default new App().server