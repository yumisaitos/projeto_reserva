import { Schema, model } from 'mongooose'

const UserSchema = new Schema({
    email: String
})

export default model('User', UserSchema)