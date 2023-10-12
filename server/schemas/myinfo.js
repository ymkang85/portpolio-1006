const mongoose = require('mongoose');

const { Schema } = mongoose;
const myinfoSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true       
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    emailjs_id: String,
    emailjs_template_id:String,
    emailjs_api:String,
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Myinfo', myinfoSchema);