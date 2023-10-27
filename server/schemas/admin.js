const mongoose = require('mongoose');
const { Schema } = mongoose;
const adminsSchema = new Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    userpass: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Admin', adminsSchema);