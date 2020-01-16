const mongoose = require('mongoose')

const ParceiroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  linkparceiro: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

mongoose.model('Parceiro', ParceiroSchema);
