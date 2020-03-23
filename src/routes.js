const {Router} =  require('express');
const AdminController = require('./controllers/AdminController');
const SalaController = require('./controllers/SalaController');
const QuestionarioController = require('./controllers/QuestionarioController');
const ApresentacaoController = require('./controllers/ApresentacaoController');

const routes = Router();

routes.get('/admin', AdminController.index);
routes.post('/admin', AdminController.storeAdmin);

routes.get('/salas', SalaController.index);
routes.post('/sala', SalaController.storeSala);

routes.get('/perguntas', QuestionarioController.index);
routes.post('/questionario', QuestionarioController.storeQuestionario);

routes.get('/apresentacao', ApresentacaoController.index);
routes.post('/apresentacao', ApresentacaoController.storeApresentacao);


module.exports = routes;