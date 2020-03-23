const Sala = require('../models/Sala');

module.exports = {
    //criando GET de administradores
    async index(request,response){

        const salas = await Admin.find();

        return response.json(salas);
    },


    //gravando Admin no banco de dados
    async storeSala (request, response) {
    
            const {PIN,descricao,status} = request.body;
            
            let sala = await Sala.findOne({username});

            if(!sala){
                console.log(request.body);
                    
                sala =  await Sala.create({
                   name,
                   PIN,                   
                   descricao,
                   status
                })
            }
           
    
            return response.json(sala);
        
    }
};