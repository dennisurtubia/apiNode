const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir') ;

// Inciando o App
const app = express();

// Permite que o app receba requisições em JSON
app.use(express.json());

// Iniciando o BD
mongoose.connect(
	"mongodb://localhost:27017/nodeapi",
	{ useNewUrlParser: true }
);

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);