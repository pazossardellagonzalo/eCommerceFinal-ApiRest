import { model } from 'mongoose'
import { userInfo } from 'os';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const loginSchema = new Schema({
    user: String,
    password: String
})

export type iLogin = {
    user: string | null
    password: string | null
}

export const Login = model('login', loginSchema)