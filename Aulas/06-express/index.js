const express   = require('express')
//npm i --save-dev @types/express
const app       = express()
const port      = 3000

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/blog', (req, res) => {
    res.send('Blog')
})

app.get('/canal', (req, res) => {
    res.send('Canal - alterado 2')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})