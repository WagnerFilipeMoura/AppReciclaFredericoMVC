const mongoose = require('mongoose')
const Parceiro = mongoose.model('Parceiro')

module.exports = {
  async store(req, res, next) {
    try {
      await Parceiro.create(req.body);

      req.flash('success', 'Cadastrado com sucesso');
      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }

  },

  async destroy(req, res) {
    await Parceiro.findByIdAndRemove(req.params.id)

    return res.redirect('/app/dashboard/conparceiro')
  }
};
