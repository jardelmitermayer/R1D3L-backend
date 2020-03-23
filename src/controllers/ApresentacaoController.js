const Apresentacao = require('../models/Apresentacao');

module.exports = {
    //criando GET de perguntas
    async index(request,response){

        const apresentacao = await apresentacao.find();

        return response.json(apresentacao);
    },


    //gravando Admin no banco de dados
    async storeApresentacao (request, response) {
    
            const {titulo,apresentadores,assunto,participantes} = request.body;
            
                console.log(request.body);
                    
                apresentacao =  await Apresentacao.create({
                   titulo,
                   apresentadores,                   
                   assunto,
                   participantes
                })
            
            return response.json(apresentacao);
        
    }
};