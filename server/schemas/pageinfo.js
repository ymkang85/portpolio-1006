const mongoose = require('mongoose');

const { Schema } = mongoose;
const pageinfoSchema = new Schema({
    pagename : {
        type : String,
        required : true
    },
    title: {
        type: String,
        required: true,
    },
    content: String,
    animated: {
        type: [String]
    },
    orimg : {
        type: [String]
    },
    img: {
        type: [String]
    }, 
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pageinfo', pageinfoSchema);