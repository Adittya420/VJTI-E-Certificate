import { Schema, model } from "mongoose";

const committeeCards = new Schema({
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
});

export default model("committee",committeeCards);