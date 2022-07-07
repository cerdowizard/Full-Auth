require('dotenv').config()
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const fs = require('express-fileupload')
require('./databaseConfig')
const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fs({
    useTempFiles: true,
}))


app.use('/api/user', require('./Routers/userRouter'))

app.use('/',(req, res, next)=>{
    res.json({msg: `Hello welcome to full Auth`})
})

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})