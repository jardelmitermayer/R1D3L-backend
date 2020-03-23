const {Router} =  require('express');
const AdminController = require('./controllers/AdminController');
const SalaController = require('./controllers/SalaController');

const routes = Router();

routes.get('/admin', AdminController.index);
routes.post('/admin', AdminController.storeAdmin);

routes.get('/salas', SalaController.index);
routes.post('/sala', SalaController.storeSala);



module.exports = routes;