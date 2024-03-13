const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

async function dbConnection(dbUrl) {
    try {
        await mongoose.connect(dbUrl)
        console.log('Database Connected...');
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnection