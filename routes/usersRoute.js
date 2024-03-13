const { 
    getAllUsers, 
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/usersController')

function usersRoute(router) {

    router.get('/users', getAllUsers)

    router.get('/users/:id', getUserById)

    router.put('/users/:id', updateUser)

    router.delete('/users/:id', deleteUser)

}

module.exports = usersRoute