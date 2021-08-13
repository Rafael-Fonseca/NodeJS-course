/*
Para utilizar módulos é necessário que, o arquivo da definição realize o export.
Por exemplo:
Arquivo: myMath.js
    function soma(a,b){
        return a + b
    }

    module.exports = soma

E que haja uma importação para dentro de uma variável no arquivo que realizará
a utilização, por exemplo:

Arquivo: myCalculator.js
    var somaCalc = require("caminho relativo do arquivo")

===============================================================================

Para realizar exportação múltipla, suponhamos que myMath.js também contenha as
funções subtracao, multiplicacao e divisao a linha de exportação teria que ser
substituída por:
    module.exports = {
        soma,
        subtracao,
        multiplicacao,
        divisao
    }
*/