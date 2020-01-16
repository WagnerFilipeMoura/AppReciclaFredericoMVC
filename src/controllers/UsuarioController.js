const mongoose = require('mongoose')

const Usuario  = mongoose.model('Usuario');
const bcrypt = require('bcryptjs')

module.exports = {
  logar(req, res) {
    return res.render('autenticacao/logar');
  },

  async authenticate(req, res, next) {
    try {
      const { nomelogin, password } = req.body;

      const user = await Usuario.findOne({nomelogin});

      if (!user) {
        req.flash('error', 'Usuário inexistente');
        return res.redirect('back');
      }

      if (!await bcrypt.compare(password, user.senha)) {
        req.flash('error', 'Senha incorreta');
        return res.redirect('back');
      }

      req.session.user = user;

      req.session.save(() => {
        return res.redirect('/app/dashboard');
      });
    } catch (err) {
      return next(err);
    }
  },

  async register(req, res, next) {
    try {
      const { nomelogin } = req.body;

      if (await Usuario.findOne({ where: { nomelogin } })) {
        // req.flash('error', 'E-mail já cadastrado');
        return res.redirect('back');
      }

      // const password = await bcrypt.hash(req.body.password, 5);

      await Usuario.create(req.body);

      // req.flash('success', 'Usuário cadastrado com sucesso');
      return res.redirect('/');
    } catch (err) {
      return next(err);
    }
  },

  signout(req, res) {
    return req.session.destroy(() => {
      res.redirect('/');
    });
  }
}
