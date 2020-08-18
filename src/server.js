const app = require('./app');
const express = require('express')

app.use('/validateBardoc/doc', express.static('src/apidoc'))
app.listen(3333)
