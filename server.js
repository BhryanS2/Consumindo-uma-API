const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', async (req, res)=>{
    
    const { data } = await axios('http://jsonplaceholder.typicode.com/users')
    //res.send(data)

    return res.json(data)
})

//sempre ficar em ultimo
app.listen('8000')