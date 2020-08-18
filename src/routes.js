const routes = require('express').Router();

const validateBarCodeController = require('./controllers/validateBarCodeController');

routes.get('/', validateBarCodeController.validadeBarCode);

module.exports = routes;

/**
* @api {get} http://localhost:3333/ Validate a digitable line
* @apiDescription Validate a digitable line.
*
* @apiExample Example body request:


{
    "linhaDigitavel" : 42297.11504 00001.954411 60020.034520 2 68610000054659"
}
*

*
*
* @apiGroup barcode
 @apiParam (request body) {String} linhaDigitavel linha digitavel do boleto

* @apiSuccessExample {json} Success-Response:
{
  "linhaDigitavelIsValid": true,
  "valor": "R$ 546.59",
  "dataVencimento": "2016-07-20T20:54:59.000Z",
  "barcode": "42292686100000546597115000001954416002003452"
}

 * @apiSuccess               {boolean}                     linhaDigitavelIsValid           Linha digitável do boleto é valid ?
 * @apiSuccess               {string}                     valor                           Valor total do boleto
 * @apiSuccess               {string}                     dataVencimento                  Data de vencimento do boleto
 * @apiSuccess               {string}                barcode                         Código de barras
 *
 * @apiErrorExample {json} Error-Response: 400
  * HTTP/1.1 400 OK
 {
  "message": "Bad Request,put a valid digitable Line!"
}

*/