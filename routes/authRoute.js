const {
    registerUser,
    userLogin
} = require('../controllers/authController')

function authRoute(router) {

    router.post('/auth/register', registerUser)

    router.post('/auth/login', userLogin)

}

module.exports = authRoute