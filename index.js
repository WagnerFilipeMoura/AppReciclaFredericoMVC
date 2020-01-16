require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nunjucks = require('nunjucks')
const path = require('path');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const dbConfig = require('./config/database');
const flash = require('connect-flash');
const session = require('express-session');
const sessionConfig = require('./config/session');
const methodOverride = require('method-override');

// Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

// Estilização Boostrap
app.use(express.static(path.resolve('src', 'public')));

// Configuração NunJucks
nunjucks.configure(path.resolve('src', 'views'), {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

// Iniciando o DB
mongoose.connect(dbConfig.url, { useNewUrlParser: true });

// Exportando os Modelos BD
requireDir('./src/models');

// Sessão
app.use(session(sessionConfig));

// Mensagens
app.use(flash());

// Update e Destroy
app.use(methodOverride('_method'));

// Rotas
app.use('/', require('./src/routes'));

const port = process.env.PORT || 3000;

app.listen(port);
