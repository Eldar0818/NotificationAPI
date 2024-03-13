const {
    getAllCategories,
    getCategoryById,
    createNewCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoriesController')

function categoriesRoute(router) {

    router.get('/categories', getAllCategories)

    router.get('/categories/:id', getCategoryById)

    router.post('/categories', createNewCategory)

    router.put('/categories/:id', updateCategory)

    router.delete('/categories/:id', deleteCategory)

}

module.exports = categoriesRoute