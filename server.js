const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    return res.json({
        mensage: "rodando"
    })
})

//sempre ficar em ultimo
app.listen('8000')