const express = require('express');
const routes = express.Router();

const validateBarCodeController = require('./controllers/validateBarCodeController');

routes.get('/', validateBarCodeController.validadeBarCode);

module.exports = routes; 