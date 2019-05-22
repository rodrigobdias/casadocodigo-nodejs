
const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;

