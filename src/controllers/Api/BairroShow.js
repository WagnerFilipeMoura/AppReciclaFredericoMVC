const mongoose = require('mongoose')

const Bairro = mongoose.model('Bairro')

module.exports = {
  async index(req, res) {
    const bairros = await Bairro.find();

    // const bairros = await [{"_id":"5cec6450e33fdbe5457a9deb","bairro":"Centro - Resíduos Orgânicos","diasColetaSecos":"Segunda - Quarta - Sexta","diasColetaOrganicos":"Segunda - Quarta - Sexta","createdAt":"2019-05-27T22:27:28.938Z","__v":0},{"_id":"5cec647be33fdbe5457a9dec","bairro":"Centro - Resíduos Secos","diasColetaSecos":"Terça - Quinta - Sábado","diasColetaOrganicos":"Terça - Quinta - Sábado","createdAt":"2019-05-27T22:28:11.543Z","__v":0},{"_id":"5cec64a7e33fdbe5457a9ded","bairro":"São Cristóvão","diasColetaSecos":"Quarta - Sexta","diasColetaOrganicos":"Quarta - Sexta","createdAt":"2019-05-27T22:28:55.731Z","__v":0},{"_id":"5cec64cae33fdbe5457a9dee","bairro":"Aparecida, Bela Vista e Ipiranga","diasColetaSecos":"Segunda - Quarta - Sexta","diasColetaOrganicos":"Segunda - Quarta - Sexta","createdAt":"2019-05-27T22:29:30.839Z","__v":0},{"_id":"5cec64efe33fdbe5457a9def","bairro":"Panosso e Primavera","diasColetaSecos":"Terça - Quinta - Sábado","diasColetaOrganicos":"Terça - Quinta - Sábado","createdAt":"2019-05-27T22:30:07.689Z","__v":0},{"_id":"5cec6506e33fdbe5457a9df0","bairro":"Santo Inácio e Barril","diasColetaSecos":"Segunda - Quarta - Sexta","diasColetaOrganicos":"Segunda - Quarta - Sexta","createdAt":"2019-05-27T22:30:30.709Z","__v":0},{"_id":"5cec65c7e33fdbe5457a9df1","bairro":"São Francisco de Paula, Distrito Industrial e São José","diasColetaSecos":"Terça - Quinta - Sábado","diasColetaOrganicos":"Terça - Quinta - Sábado","createdAt":"2019-05-27T22:33:43.250Z","__v":0},{"_id":"5cec65e3e33fdbe5457a9df2","bairro":"Fátima e Santo Antônio","diasColetaSecos":"Terça - Quinta - Sábado","diasColetaOrganicos":"Terça - Quinta - Sábado","createdAt":"2019-05-27T22:34:11.313Z","__v":0},{"_id":"5cec662ce33fdbe5457a9df3","bairro":"Loteamento Boa Esperança","diasColetaSecos":"Segunda - Quinta","diasColetaOrganicos":"Segunda - Quinta","createdAt":"2019-05-27T22:35:24.698Z","__v":0},{"_id":"5cec6640e33fdbe5457a9df4","bairro":"Itapagé","diasColetaSecos":"Segunda - Quarta - Sexta","diasColetaOrganicos":"Segunda - Quarta - Sexta","createdAt":"2019-05-27T22:35:44.811Z","__v":0},{"_id":"5cec665de33fdbe5457a9df5","bairro":"Faguense","diasColetaSecos":"Terça","diasColetaOrganicos":"Terça","createdAt":"2019-05-27T22:36:13.577Z","__v":0},{"_id":"5cec6679e33fdbe5457a9df6","bairro":"Barrilense","diasColetaSecos":"Segunda","diasColetaOrganicos":"Segunda","createdAt":"2019-05-27T22:36:41.377Z","__v":0}]

    return res.json(bairros);
  }
};
