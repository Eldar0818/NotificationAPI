const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookiePraser = require('cookie-parser')
const dbConnection = require('./infrastructure/dbConnection')
const routesProvider = require('./routes/routesProvider')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8081

dbConnection(process.env.DB_URL)

app.use(express.json())
app.use(cors())
app.use(cookiePraser())

app.use('/api', routesProvider())

app.listen(PORT, () => {
    let isDevMode = true
    if(isDevMode){
        console.log(`SERVER STARTED, PORTAL ADDRESS - http://localhost:${PORT}/`);
    }else{
        console.log(PORT);
    }
})