const mongoose = require('mongoose');

//Schema do Administrador do Sistema

const ApresentacaoSchema = new mongoose.Schema({
    
    titulo:String,
    apresentadores:String,
    assunto:String,
    participantes:[String]
    
});

module.exports = mongoose.model('Apresentacao', ApresentacaoSchema);