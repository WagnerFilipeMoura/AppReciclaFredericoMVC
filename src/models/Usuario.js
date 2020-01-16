const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  nomelogin: {
    type: String,
    unique: true,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

UsuarioSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('senha')) next();

  this.senha = await bcrypt.hash(this.senha, 5)
})

mongoose.model('Usuario', UsuarioSchema);
