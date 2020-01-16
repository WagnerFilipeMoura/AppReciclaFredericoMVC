const mongoose = require('mongoose')
const EcoPonto = mongoose.model('EcoPonto')

module.exports = {
  async store(req, res, next) {
    try {
      await EcoPonto.create(req.body);

      req.flash('success', 'Cadastrado com sucesso');
      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }

  },

  async destroy(req, res) {
    await EcoPonto.findByIdAndRemove(req.params.id)

    return res.redirect('/app/dashboard/conecoponto')
  }
};
