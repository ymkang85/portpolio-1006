const mongoose = require('mongoose');

const { Schema } = mongoose;
const pageinfoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    animated: {
        type: [String],
    },
    img: String,
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pageinfo', pageinfoSchema);