// No terminal digitar >> npm install nodemon -g
// Não será mais necessário porque o -g é uma instalação global
// No linux utilizar >> sudo npm install nodemon -g


/*como em tese está instalado em todo o sistema e serve para não ter que
reiniciar o server a cada alteração no código, vou testar no 06-express */

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
    res.send('Canal - alterado 4')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})
