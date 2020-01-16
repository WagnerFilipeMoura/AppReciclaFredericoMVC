const mongoose = require('mongoose')
const Bairro = mongoose.model('Bairro')

module.exports = {
  async store(req, res, next) {
    try {
      const checkSecos = req.body.secos
      const checkOrganicos = req.body.organicos

      const diasColetaSecos = checkSecos.reduce(function(total, next) {
        return total + ' - ' + next
      })

      const diasColetaOrganicos = checkOrganicos.reduce(function(total, next) {
        return total + ' - ' + next
      })

      await Bairro.create({...req.body, diasColetaSecos, diasColetaOrganicos});

      req.flash('success', 'Cadastrado com sucesso');
      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res) {
    await Bairro.findByIdAndRemove(req.params.id)

    return res.redirect('/app/dashboard/conbairro')
  }
};
