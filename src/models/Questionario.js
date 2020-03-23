const mongoose = require('mongoose');

//Schema do Administrador do Sistema

const QuestionarioSchema = new mongoose.Schema({
    
    pergunta:String,
    resposta:String,
    avaliadores:[{
        nome:String
    }]
});

module.exports = mongoose.model('Questionario', QuestionarioSchema);