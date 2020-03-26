const express = require ('express');  // importing the express module into the "express" variable

const app = express(); // variable that stores the application

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omni Stack 11.0',
        aluno: 'Diego Abreu'
    });
});

app.listen(3333);  // makes the application listen to the 3333 port

