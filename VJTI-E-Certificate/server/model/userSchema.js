import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    id:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Role can be either 'user' or 'admin'
        default: 'user' // Default role is 'user'
    }
});

export default model("user",userSchema);