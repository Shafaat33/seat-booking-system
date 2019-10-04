const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    seat:{
        type: String,
        required: true
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "seats",
    //     required: "seat is required"
     }
})

module.exports = Users = mongoose.model('users', UserSchema);