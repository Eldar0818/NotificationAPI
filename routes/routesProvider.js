const express = require('express')
const usersRoute = require('./usersRoute')
const authRoute = require('./authRoute')
const notesRoute = require('./notesRoute')
const categoriesRoute = require('./categoriesRoute')
const commentRoute = require('./commentsRoute')

function routesProvider(){
    const router = express.Router()

    usersRoute(router)

    authRoute(router)

    notesRoute(router)

    categoriesRoute(router)

    commentRoute(router)

    return router
}

module.exports = routesProvider