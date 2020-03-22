const mongoose = require('mongoose');

//Schema do Administrador do Sistema

const SalaSchema = new mongoose.Schema({
    PIN: Number,
    descricao:String,
    status:String,
    
});

module.exports = mongoose.model('Sala', SalaSchema);