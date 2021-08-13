const express = require('express')
//npm i --save-dev @types/express
const app = express()
const port = 3000

app.listen(port, function(erro){
    if(erro){
        console.log('Algum erro aconteceu!')
    }else{
        console.log(`Example app listening at http://localhost:${port}`)
    }
})
