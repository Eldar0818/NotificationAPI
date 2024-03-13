const User = require("../models/User");
const bcrypt = require('bcrypt')

async function getAllUsers(req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id)

        if(!user){
            return res.status(404).json({ error: "User not exist!" })
        }

        res.status(200).json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function updateUser(req, res) {

    try {
        const user = await User.findById(req.params.id)

        if(!user){
            return res.status(404).json({ error: "User not exist!" })
        }

        if(req.body.password){
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(req.body.password, salt)
            req.body.password = hashedPassword
        }

        await User.findByIdAndUpdate(user._id, {$set: req.body}, {new: true})
        res.status(204).json({ message: "User has been removed!" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findById(req.params.id)

        if(!user){
            return res.status(404).json({ error: "User not exist!" })
        }

        await User.findByIdAndDelete(user._id)
        res.status(204).json({ message: "User has been removed!" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}