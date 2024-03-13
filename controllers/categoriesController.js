const Category = require('../models/Category')

async function getAllCategories(req, res) {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function getCategoryById(req, res) {
    try {
        const category = await Category.findById(req.params.id)

        if(!category){
            return res.status(404).json({ error: "Category doesn't exist!" })
        }

        res.status(200).json(category)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function createNewCategory(req, res) {
    try {
        await Category.create(req.body)
        res.status(201).json({ message: "Category has been created!" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function updateCategory(req, res) {
    try {
        const category = await Category.findById(req.params.id)

        if(!category){
            return res.status(404).json({ error: "Category doesn't exist!" })
        }

        await Category.findByIdAndUpdate(category._id, {$set: req.body}, {new: true})

        res.status(204).json({})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function deleteCategory(req, res) {
    try {
        const category = await Category.findById(req.params.id)

        if(!category){
            return res.status(404).json({ error: "Category doesn't exist!" })
        }

        await Category.findByIdAndDelete(category._id)

        res.status(204).json({})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createNewCategory,
    updateCategory,
    deleteCategory
}