const mongoose = require('mongoose')
const EcoPonto = mongoose.model('EcoPonto')
const Parceiro = mongoose.model('Parceiro')
const Bairro = mongoose.model('Bairro')

module.exports = {
  inicio(req, res, next) {
    return res.render('partials/nav');
  },

  cadecoponto(req, res, next) {
    return res.render('ecoponto/cadastrar');
  },

  async conecoponto(req, res, next) {
    try {
      const ecopontos = await EcoPonto.find()

      return res.render('ecoponto/consultar', {ecopontos});

    } catch (err) {
      return next(err);
    }
  },

  cadparceiro(req, res, next) {
    return res.render('parceiro/cadastrar');
  },

  async conparceiro(req, res, next) {
    try {
      const parceiros = await Parceiro.find()

      return res.render('parceiro/consultar', {parceiros});

    } catch (err) {
      return next(err);
    }
  },

  cadbairro(req, res, next) {
    return res.render('bairro/cadastrar');
  },

  async conbairro(req, res, next) {
    try {
      const bairros = await Bairro.find()

      return res.render('bairro/consultar', {bairros});

    } catch (err) {
      return next(err);
    }
  },

  onesignal(req, res, next) {
    return res.render('onesignal/push');
  }
}
