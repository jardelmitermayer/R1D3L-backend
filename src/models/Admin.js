const mongoose = require('mongoose');

//Schema do Administrador do Sistema

const AdminSchema = new mongoose.Schema({
    username:String,
    name: String,
    bio:String,
    profissao:String,
    password:String,
    
});

module.exports = mongoose.model('Admin', AdminSchema);