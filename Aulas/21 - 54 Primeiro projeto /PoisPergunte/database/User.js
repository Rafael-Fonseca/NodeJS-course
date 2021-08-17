const sequelize = require('sequelize')
const connection = require('./database')

const User = connection.define('user',{
    username:{
        type: sequelize.STRING,
        allowNull: false
    },
    password:{
        type:sequelize.STRING,
        allowNull: false
    },
    mail:{
        type: sequelize.STRING,
        allowNull: false
    }
});

User.sync({force:false}).then(() => {
    console.log('Tabela criada!')
})

module.exports = User
