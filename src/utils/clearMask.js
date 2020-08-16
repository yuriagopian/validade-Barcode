module.exports = function clearMask(codigo) {
  return codigo.replace(/( |\.|-)/g, '');
}

