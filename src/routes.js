const {Router} =  require('express');
const Admin = require('./models/Admin');
const Bcrypt = require("bcryptjs");

const routes = Router();

routes.post('/admin', async (request, response) => {
    
    try {
        const {name,bio,profissao} = request.body;
        
        console.log(request.body);

        const admin =  await Admin.create({
            username,
            name,
            bio,
            profissao,
            password,
        })

        return response.json(admin);
    }catch(error){
        response.status(500).send(error);
    }
});
app.post("/login", async (request, response) => {
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


module.exports = routes;