const {
    getComment,
    createComment,
    changeComment,
    removeComment
} = require('../controllers/commentController')

function commentRoute(router) {

    router.get('/comment/:id', getComment)

    router.post('/comment', createComment)

    router.patch('/comment/:id', changeComment)

    router.delete('/comment/:id', removeComment)

}

module.exports = commentRoute