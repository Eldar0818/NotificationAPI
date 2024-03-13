const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    noteId: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    commentor: {
        type: String,
        required: true 
    },
    commentorId: {
        type: String,
        required: true 
    },

}, 
{timestamps: true})

module.exports = mongoose.model('Comment', commentSchema)