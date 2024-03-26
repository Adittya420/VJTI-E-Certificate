import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    committee:{
        type: String,
        required: true,
    }
});

export default model("admin",adminSchema);