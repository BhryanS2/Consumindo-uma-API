const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    return res.json([
        {name: "Bhryan"},
        {name: 'Julio'}
    ])
})

//sempre ficar em ultimo
app.listen('8000')