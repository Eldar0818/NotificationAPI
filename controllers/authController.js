const User = require('../models/User')
const bcrypt = require('bcrypt')

async function registerUser(req, res) {

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    try {
        const requestBody = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        }
        await User.create(requestBody)
        res.status(201).json({ success: "User has been registered." })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

 async function userLogin(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user){
            return res.status(404).json({ error: "User not found!" })
        }
        
        const validPassword = bcrypt.compareSync(req.body.password, user.password)
        if(!validPassword){
            return res.status(401).json({ error: "Incorrect password!" })
        }
        const { password, ...others } = user._doc
        return res.status(200).json(others)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error!" })
    }
}

module.exports = {
    registerUser,
    userLogin
}