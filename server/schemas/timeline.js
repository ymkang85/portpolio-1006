const mongoose = require('mongoose');

const { Schema } = mongoose;
const timelineSchema = new Schema({
    jobtitle: {
        type: String,
        required: true,
    },
    where: String,
    wdate: String,
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Timeline', timelineSchema);