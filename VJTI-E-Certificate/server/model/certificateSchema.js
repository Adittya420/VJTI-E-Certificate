import { Schema, model } from "mongoose";

const certificateSchema = new Schema({
    committeeName:{
        type: String,
        required: true,
    },
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    }
});

export default model("certificate",certificateSchema);