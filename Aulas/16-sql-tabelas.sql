/* Neste estudo está sendo utilizado postgres SQL.
Criar banco de dados
*/
CREATE DATABASE teste;

/*
Criar Tabela
*/
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/* Comandos
\l              | Lista todos os bancos de dados disponíveis
\dt             | Lista todas as tabelas disponíveis
\d table_name   | Descreve a tabela
*/

/*********************
** Aula 17 - INSERT **
*********************/

/*
Incluindo valores na tabela
*/
INSERT INTO usuarios(nome, email, idade) VALUES(
    'nome1',
    'email1@',
    18/*5*/

);

/*
Consultando valores
*/
SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE idade >= 10;

/*********************
** Aula 18 - DELETE **
*********************/
DELETE FROM usuarios WHERE idade < 18;

/*********************
** Aula 19 - UPDATE **
*********************/
UPDATE from usuarios SET nome = 'nome altero', email='email alterado' WHERE nome='nome1';
