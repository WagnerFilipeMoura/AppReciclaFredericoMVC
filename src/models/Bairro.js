const mongoose = require('mongoose')

const BairroSchema = new mongoose.Schema({
  bairro: {
    type: String,
    required: true,
  },
  diasColetaSecos: {
    type: String,
    required: true,
  },
  diasColetaOrganicos: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

mongoose.model('Bairro', BairroSchema);
