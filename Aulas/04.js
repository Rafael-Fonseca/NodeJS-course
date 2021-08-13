var http = require('http')
http.createServer(function(req, resp){
    resp.end('Bem vindo!')
}).listen(3000)
console.log('meu servidor está rodando!')