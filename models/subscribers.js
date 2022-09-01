import mongoose from "mongoose";

const subscribers = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    subscribed:{
        type: String,
        required: true,
    },
    created:{
        type: Date,
        default: Date.now
    }
})

const Subscribers = mongoose.model('Subscribers', subscribers);

export default Subscribers ;