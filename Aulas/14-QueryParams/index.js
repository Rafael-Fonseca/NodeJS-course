const express = require('express')
//npm i --save-dev @types/express
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if(!req.query['param']){
        res.send('14 - Query Params - HOME \
        <br>\
        <br>\
        Passe query params no padrão localhost:3000/?param=VALOR DESEJADO')
    }
    else{
        res.send(`14 - Query Params - HOME \
        <br>\
        <br>\
        Valor desejado = ${req.query['param']}`)
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})