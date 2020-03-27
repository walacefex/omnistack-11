const express = require('express'); //chamando o express

const app = express();
app.get('/', (require, response) =>{
    return response.json({
        evento: 'semana Omnistack 11',
        aluno: 'Walace'
    });
});
//ouvindo a porta 3333
app.listen(3333);