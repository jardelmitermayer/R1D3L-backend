const Questionario = require('../models/Questionario');

module.exports = {
    //criando GET de perguntas
    async index(request,response){

        const questionario = await Questionario.find();

        return response.json(questionario);
    },


    //gravando Admin no banco de dados
    async storeQuestionario (request, response) {
    
            const {perguntas,resposta,avaliadores} = request.body;
            
                console.log(request.body);
                    
                questionario =  await Questionario.create({
                   perguntas,
                   resposta,                   
                   avaliadores:[{
                       name: avaliadores.name
                   }]
                })
            
           
            return response.json(questionario);
        
    }
};