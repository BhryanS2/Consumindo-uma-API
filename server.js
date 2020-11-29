const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.get('/', (req, res)=>{
    return res.json([
        {
            name: "Bhryan"
        },
        {
            name: 'Julio'
        }
    ])
})

//sempre ficar em ultimo
app.listen('8000')