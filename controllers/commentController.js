const Comment = require('../models/Comment')

async function getComment(req, res) {
    try {
        const targetComment = await Comment.findById(req.params.id)
        if(targetComment === null){
            return res.status(404).json({ message: "Comment doesn't exist!" })
        }

        res.status(200).json(targetComment)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function createComment(req, res) {
    try {
        const { noteId, content, commentor, commentorId } = req.body
        await Comment.create({
            noteId: noteId,
            content: content,
            commentor: commentor,
            commentorId: commentorId
        })
        res.status(201).json({ message: "Comment has been made!" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function changeComment(req, res) {
    try {
        const commentId = req.params.id;
        const { content } = req.body;

        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ error: "Comment not found!" });
        }
        
        comment.content = content;
        await comment.save();

        res.status(204).json({})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function removeComment(req, res) {
    try {
        const commentId = req.params.id;
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ error: "Comment not found!" });
        }

        await Comment.findByIdAndDelete(commentId)
        res.status(204).json({})

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

module.exports = {
    getComment,
    createComment,
    changeComment,
    removeComment
}