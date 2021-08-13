const express = require('express')
//npm i --save-dev @types/express
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Parâmetros - Home')
})

// /:indica que é um parametro -- ? indica que ele é opcional.
app.get('/ola/:nome?/:idade?',(req,res) => {
    /*TODO:Esta rota tem um problema /ola/idade resulta em ... Olá! idade ...
    **ao invés de ... Olá!... Como resolver?*/
    if(req.params.nome && req.params.idade){
        res.send(`Olá! ${req.params.nome}!<br>Idade: ${req.params.idade}`)
    }else if(req.params.nome){
        res.send(`Olá! ${req.params.nome}!`)
    }else{
        res.send(`Olá!`)
    }
})

app.listen(port, () => {
    console.log(`Servidor Parâmetros rodando na porta ${port}`)
})