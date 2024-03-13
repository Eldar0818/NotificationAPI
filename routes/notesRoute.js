const {
    getAllNotes,
    getNoteById,
    addNewNote,
    updateNote,
    deleteNote
} = require('../controllers/notesController')

function notesRoute(router) {

    router.get('/notes', getAllNotes)

    router.get('/notes/:id', getNoteById)

    router.post('/notes', addNewNote)

    router.put('/notes/:id', updateNote)

    router.delete('/notes/:id', deleteNote)

}

module.exports = notesRoute