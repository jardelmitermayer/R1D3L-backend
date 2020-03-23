const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0-gmzzw.mongodb.net/r1d3l?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json()); //sempre antes de routes
app.use(routes);
//Tipos de parâmetros: 

// Query params : request.query (Filtros, ordenação, paginação,...)
// Route params(metodo PUT e DELETE geralmente): request.params ( Identificar um recurso na alteração ou remoção)
// Body : request.body (Dados para criação ou alteração de algum registro)



app.listen(7070);