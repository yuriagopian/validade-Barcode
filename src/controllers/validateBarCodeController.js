const clearMask = require('../utils/clearMask')

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async validadeBarCode(req, res) {
        /**
         * {string} linhadigitavel
         * se refere a linha digitavel destinada na requisição
         */
        const { linhaDigitavel } = req.body

        // pega linha digitavel enviado por parametro e tira caracteres especiais
        const codigo = clearMask(linhaDigitavel)
        // ex: 42297.11504 00001.954411 60020.034520 2 68610000054659

        // verifica o tipo de código se é linha digitavel ou código de barras
        const tipoCodigo = identificarTipoCodigo(codigo)

        if (tipoCodigo == 'TAMANHO_INCORRETO') {
            return res.json({
                error: "Tamanho invádido insira uma linha digitável válida!"
            })
        }


        let valorBoleto = '';
        let valorFinal;
        valorBoleto = codigo.substr(37);
        valorFinal = valorBoleto.substr(0, 8) + '.' + valorBoleto.substr(8, 2);

        console.log(valorFinal)

        // let char = valorFinal.substr(1, 1);

        // let codigoBarras =
        //     linhaDigitavel.substr(0, 4) +
        //     linhaDigitavel.substr(32, 15) +
        //     linhaDigitavel.substr(4, 5) +
        //     linhaDigitavel.substr(10, 10) +
        //     linhaDigitavel.substr(21, 10);

        // let blocos = [];

        // blocos[0] = linhaDigitavel.substr(0, 10);
        // blocos[1] = linhaDigitavel.substr(10, 11);
        // blocos[2] = linhaDigitavel.substr(21, 11);

        const blocos = [
            {
                num: linhaDigitavel.substring(0, 9),
                DV: linhaDigitavel.substring(9, 10),
            },
            {
                num: linhaDigitavel.substring(10, 20),
                DV: linhaDigitavel.substring(20, 21),
            },
            {
                num: linhaDigitavel.substring(21, 31),
                DV: linhaDigitavel.substring(31, 32),
            },
        ];



    }
}

function identificarTipoCodigo(codigo) {
    // codigo = clearMask(codigo);

    if (typeof codigo !== 'string') throw new TypeError('Insira uma string válida!');

    if (codigo.length == 44) {
        return 'CODIGO_DE_BARRAS'
    } else if (codigo.length == 46 || codigo.length == 47 || codigo.length == 48) {
        return 'LINHA_DIGITAVEL'
    } else {
        return 'TAMANHO_INCORRETO';
    }
}
