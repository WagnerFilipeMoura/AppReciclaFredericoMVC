const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')

const EcoPonto = mongoose.model('EcoPonto')

module.exports = {
  async index(req, res) {
    // const key = await bcrypt.hash('reciclafrederico', 5);

    // console.log(key)

    // if (await bcrypt.compare('reciclafrederico', '$2a$05$xD7Yzag2NbUTZPCHJtmECOYtaE/VR2FRXp4TbJDjc0g6Yua1JMzIa')) {
    //   console.log('Entrou')
    // }

    const ecopontos = await EcoPonto.find()
    // const ecopontos = await [{"_id":"5ceabe1ce33fdbe5457a9dd7","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha e Pilhas","latitude":-27.358655,"longitude":-53.399573,"cor":"orange","createdAt":"2019-05-26T16:26:04.505Z","__v":0},{"_id":"5ceabf3be33fdbe5457a9dd9","titulo":"Recicle Aqui","descricao":"Pilhas","latitude":-27.356466,"longitude":-53.393058,"cor":"red","createdAt":"2019-05-26T16:30:51.574Z","__v":0},{"_id":"5ceac013e33fdbe5457a9ddb","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.360035,"longitude":-53.408063,"cor":"yellow","createdAt":"2019-05-26T16:34:27.683Z","__v":0},{"_id":"5ceac043e33fdbe5457a9ddc","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.394738,"longitude":-53.428219,"cor":"yellow","createdAt":"2019-05-26T16:35:15.544Z","__v":0},{"_id":"5ceac0dfe33fdbe5457a9ddd","titulo":"Recicle Aqui","descricao":"Pilhas","latitude":-27.360085,"longitude":-53.394041,"cor":"red","createdAt":"2019-05-26T16:37:51.200Z","__v":0},{"_id":"5ceac1a5e33fdbe5457a9dde","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.357837,"longitude":-53.400989,"cor":"yellow","createdAt":"2019-05-26T16:41:09.164Z","__v":0},{"_id":"5ceac1e6e33fdbe5457a9ddf","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.354011,"longitude":-53.393727,"cor":"yellow","createdAt":"2019-05-26T16:42:14.754Z","__v":0},{"_id":"5ceac224e33fdbe5457a9de0","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.35624,"longitude":-53.402923,"cor":"yellow","createdAt":"2019-05-26T16:43:16.289Z","__v":0},{"_id":"5cec6788e33fdbe5457a9df8","titulo":"Recicle Aqui","descricao":"Pneus","latitude":-27.343496,"longitude":-53.388427,"cor":"purple","createdAt":"2019-05-27T22:41:12.728Z","__v":0},{"_id":"5cec6812e33fdbe5457a9df9","titulo":"Recicle Aqui","descricao":"Medicamentos","latitude":-27.351908,"longitude":-53.384995,"cor":"blue","createdAt":"2019-05-27T22:43:30.745Z","__v":0},{"_id":"5cec683de33fdbe5457a9dfa","titulo":"Recicle Aqui","descricao":"Medicamentos","latitude":-27.365006,"longitude":-53.388649,"cor":"blue","createdAt":"2019-05-27T22:44:13.857Z","__v":0},{"_id":"5cec68cae33fdbe5457a9dfb","titulo":"Recicle Aqui","descricao":"Medicamentos","latitude":-27.353986,"longitude":-53.394271,"cor":"blue","createdAt":"2019-05-27T22:46:34.784Z","__v":0},{"_id":"5cec68ede33fdbe5457a9dfc","titulo":"Recicle Aqui","descricao":"Medicamentos","latitude":-27.366414,"longitude":-53.402142,"cor":"blue","createdAt":"2019-05-27T22:47:09.607Z","__v":0},{"_id":"5cec6912e33fdbe5457a9dfd","titulo":"Recicle Aqui","descricao":"Medicamentos","latitude":-27.3604,"longitude":-53.397747,"cor":"blue","createdAt":"2019-05-27T22:47:46.831Z","__v":0},{"_id":"5cec6942e33fdbe5457a9dfe","titulo":"Recicle Aqui","descricao":"Medicamentos","latitude":-27.344836,"longitude":-53.396308,"cor":"blue","createdAt":"2019-05-27T22:48:34.163Z","__v":0},{"_id":"5cf2857de33fdbe5457a9dff","titulo":"Recicle Aqui","descricao":"Pilhas","latitude":-27.355638,"longitude":-53.397597,"cor":"red","createdAt":"2019-06-01T14:02:37.187Z","__v":0},{"_id":"5cf286f8e33fdbe5457a9e00","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.364254,"longitude":-53.389346,"cor":"yellow","createdAt":"2019-06-01T14:08:56.350Z","__v":0},{"_id":"5cf28720e33fdbe5457a9e01","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.350816,"longitude":-53.38384,"cor":"yellow","createdAt":"2019-06-01T14:09:36.372Z","__v":0},{"_id":"5cf28753e33fdbe5457a9e02","titulo":"Recicle Aqui","descricao":"Óleo de Cozinha","latitude":-27.357908,"longitude":-53.397804,"cor":"yellow","createdAt":"2019-06-01T14:10:27.752Z","__v":0}]

    return res.json(ecopontos)
  }
};
