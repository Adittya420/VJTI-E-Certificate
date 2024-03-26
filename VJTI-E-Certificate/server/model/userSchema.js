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
    }
});

export default model("user",userSchema);