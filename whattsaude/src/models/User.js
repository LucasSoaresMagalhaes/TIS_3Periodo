import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    email: String,
    name: String,
    password: String,
    type: String
})

UserSchema.methods.matchPassword = async function (password) {
    try {
        return await password === this.password;
    } catch (error) {
        throw new Error(error);
    }
};

export default model('User', UserSchema)