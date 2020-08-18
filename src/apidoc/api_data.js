define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/apidoc/main.js",
    "group": "/home/yuri/Estudos/validate-billet/src/apidoc/main.js",
    "groupTitle": "/home/yuri/Estudos/validate-billet/src/apidoc/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "http://localhost:3333/",
    "title": "Validate a digitable line",
    "description": "<p>Validate a digitable line.</p>",
    "examples": [
      {
        "title": "Example body request:",
        "content": "\n\n{\n    \"linhaDigitavel\" : 42297.11504 00001.954411 60020.034520 2 68610000054659\"\n}",
        "type": "json"
      }
    ],
    "group": "barcode",
    "parameter": {
      "fields": {
        "request body": [
          {
            "group": "request body",
            "type": "String",
            "optional": false,
            "field": "linhaDigitavel",
            "description": "<p>linha digitavel do boleto</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"linhaDigitavelIsValid\": true,\n  \"valor\": \"R$ 546.59\",\n  \"dataVencimento\": \"2016-07-20T20:54:59.000Z\",\n  \"barcode\": \"42292686100000546597115000001954416002003452\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "linhaDigitavelIsValid",
            "description": "<p>Linha digitável do boleto é valid ?</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "valor",
            "description": "<p>Valor total do boleto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dataVencimento",
            "description": "<p>Data de vencimento do boleto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "barcode",
            "description": "<p>Código de barras</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 400",
          "content": "HTTP/1.1 400 OK\n {\n  \"message\": \"Bad Request,put a valid digitable Line!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes.js",
    "groupTitle": "barcode",
    "name": "GetHttpLocalhost3333"
  }
] });
