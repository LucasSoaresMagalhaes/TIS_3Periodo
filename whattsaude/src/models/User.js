import {Schema, model} from 'mongoose'

const UserSchema = new Schema({
    email: String,
    name: String, 
    password: String,
    type: String
})

export default model('User', UserSchema)