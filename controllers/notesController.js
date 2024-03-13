const Note = require('../models/Note');

async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id)

        if(!note){
            return res.status(404).json({ error: "Note is not exist!" })
        }

        res.status(200).json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function addNewNote(req, res) {
    try {
        await Note.create(req.body)
        res.status(201).json({ message: "New note created!" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function updateNote(req, res) {
    try {
        const note = await Note.findById(req.params.id)

        if(!note){
            return res.status(404).json({ error: "Note is not exist!" })
        }
        
        await Note.findByIdAndUpdate(note._id, {$set: req.body}, {new: true})
        res.status(204).json({})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function deleteNote(req, res) {
    try {
        const note = await Note.findById(req.params.id)

        if(!note){
            return res.status(404).json({ error: "Note is not exist!" })
        }
        
        await Note.findByIdAndDelete(note._id)
        res.status(204).json({})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

module.exports = {
    getAllNotes,
    getNoteById,
    addNewNote,
    updateNote,
    deleteNote
}