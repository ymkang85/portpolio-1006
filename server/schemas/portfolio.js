const mongoose = require('mongoose');

const { Schema } = mongoose;
const portfolioSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    title: {
        type: String,
        required: true,
    },
    content: String,
    link: String,
    orimg: [String],
    img: [String],
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);