const Admin = require('../models/Admin');
const Bcrypt = require("bcryptjs");

//index(get),show(get de apenas um),store(put), update,destroy
module.exports = {
    //criando GET de administradores
    async index(request,response){

        const adms = await Admin.find();

        return response.json(adms);
    },


    //gravando Admin no banco de dados
    async storeAdmin (request, response) {
    
            const {username,name,bio,profissao,password} = request.body;
            
            let admin = await Admin.findOne({username});

            if(!admin){
                console.log(request.body);
                    
                admin =  await Admin.create({
                    username,
                    name,
                    bio,
                    profissao,
                    password,
                })
            }
           
    
            return response.json(admin);
        
    }
};
/*app.post("/login", async (request, response) => {
    try {
        var user = await UserModel.findOne({ username: request.body.username }).exec();
        if(!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
        if(!Bcrypt.compareSync(request.body.password, user.password)) {
            return response.status(400).send({ message: "The password is invalid" });
        }
        response.send({ message: "The username and password combination is correct!" });
    } catch (error) {
        response.status(500).send(error);
    }

});
*/