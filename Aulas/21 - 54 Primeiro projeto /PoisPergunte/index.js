const express = require('express')
const connection = require('./database/database')
const userModel = require('./database/User')
const app = express()
const port = 3000

connection.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!')
}).catch((err) => {
    console.log(err)
});

// A linha abaixo configura a view engine do express como EJS
app.set('view engine', 'ejs')
// A linha abaixo configura o nome da pasta onde estarão os meus arquivos estáticos
app.use(express.static('public'))
// As linhas abaixo configuram as formas de receber dados de formulários
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', (req, res) => {
    res.render('login')
})

app.get('/new-user', (req, res) => {
    res.render('new-user')
})

app.get('/forgot-password', (req, res) => {
    res.render('forgot-password')
})

app.get('/card-manager', (req, res) => {
    res.render('card-manager')
})

app.get('/daily-offer', (req, res) => {
    res.render('daily-offer')
})

app.post('/new-user', (req, res) => {
    userModel.create({
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail
    }).then(() => {
        res.redirect('/')
    })
})

app.post('/dologin', (req, res) => {
    res.render('logged')
})



app.get('/pre/:nome?/:lang?', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    res.render('pre_introdução',{
        name: nome,
        lingua: lang
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
