const express = require('express');
const routes = express.Router();

const EcoPontoController = require('./controllers/EcoPontoController');
const UsuarioController = require('./controllers/UsuarioController');
const ApiEcoPontoshow = require('./controllers/Api/EcoPontoShow');
const ApiParceiroshow = require('./controllers/Api/ParceiroShow');
const ApiBairroshow = require('./controllers/Api/BairroShow');
const DashboardController = require('./controllers/dashboardController');
const OneSignalController = require('./controllers/OneSignalController');
const ParceiroController = require('./controllers/ParceiroController');
const BairroController = require('./controllers/BairroController');
const CalendarioEntulhoShow = require('./controllers/externo/CalendarioEntulhos');

const authMiddleware = require('./middleware/auth');
const guestMiddleware = require('./middleware/guest');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.get('/', guestMiddleware, UsuarioController.logar);
routes.post('/autenticacao', UsuarioController.authenticate);
routes.get('/sair', UsuarioController.signout);

routes.use('/app', authMiddleware);

/** Rotas Dashboard */
routes.get('/app/dashboard', DashboardController.inicio);
routes.get('/app/dashboard/cadecoponto', DashboardController.cadecoponto);
routes.get('/app/dashboard/conecoponto', DashboardController.conecoponto);
routes.get('/app/dashboard/cadparceiro', DashboardController.cadparceiro);
routes.get('/app/dashboard/conparceiro', DashboardController.conparceiro);
routes.get('/app/dashboard/cadbairro', DashboardController.cadbairro);
routes.get('/app/dashboard/conbairro', DashboardController.conbairro);
routes.get('/app/dashboard/pushnotification', DashboardController.onesignal);

/** Rotas Onesignal */
routes.post('/app/onesignal/send', OneSignalController.push);

/** Rotas Usuários */
routes.post('/app/cadastrar', UsuarioController.register);

/** Rotas de Ecopontos */
routes.post('/app/ecoponto/store', EcoPontoController.store);
routes.delete('/app/ecoponto/:id', EcoPontoController.destroy);

/** Rotas de Parceiros */
routes.post('/app/parceiro/store', ParceiroController.store);
routes.delete('/app/parceiro/:id', ParceiroController.destroy);

/** Rotas de Bairros */
routes.post('/app/bairro/store', BairroController.store);
routes.delete('/app/bairro/:id', BairroController.destroy);

/** Rotas da Api  */
routes.get('/api/', (req, res) => {res.json('online')})
routes.get('/api/ecoponto', ApiEcoPontoshow.index);
routes.get('/api/parceiro', ApiParceiroshow.index);
routes.get('/api/bairro', ApiBairroshow.index);

routes.get('/externo/CalendarioEntulhos', CalendarioEntulhoShow.showCalendario);

/** Rotas de Erros */
routes.use((req, res) => {
  res.render('errors/404')
})

routes.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  })
});

module.exports = routes;
