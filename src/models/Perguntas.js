const mongoose = require('mongoose');

//Schema do Administrador do Sistema

const PerguntasSchema = new mongoose.Schema({
    
    pergunta:String,
    resposta:String,
    
});

module.exports = mongoose.model('Perguntas', PerguntasSchema);