const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeatSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
    }
})

module.exports = Seats = mongoose.model('seats', SeatSchema);