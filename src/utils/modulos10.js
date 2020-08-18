/*
  A representação numérica do código de barras é composta, por cinco campos, sendo os
  três primeiros amarrados por DVs e calculados pelo módulo 10, conforme segue:
    a) O módulo 10 deverá ser utilizado para calcular o DV dos 03 (três) primeiros campos
    da linha digitável;
    b) Os multiplicadores começam com o número 2 (dois), sempre pela direita, alternandose
    1 e 2;
    c) Multiplicar cada algarismo que compõe o número pelo seu respectivo peso
    (multiplicador):
    d) Caso o resultado da multiplicação seja maior que 9 (nove) deverão ser somados os
    algarismos do produto, até reduzi-lo a um único algarismo:
    a. Exemplo: Resultado igual a 18, então 1+8 = 9
    e) Subtrair o total apurado no item anterior, da dezena imediatamente superior ao total
    apurado:
    a. Exemplo: Resultado da soma igual a 25, então 30 - 25
    f) O resultado obtido será o dígito verificador do número;
    a. Exemplo: 30-25 = 5 então 5 é o Dígito Verificador
    g) Se o resultado da subtração for igual a 10 (dez), o dígito verificador será igual a 0
    (zero)
*/
module.exports = function modulo10(bloco) {
    const codigo = bloco.split('').reverse();
    const somatorio = codigo.reduce((acc, current, index) => {
        let soma = Number(current) * (((index + 1) % 2) + 1);
        soma = (soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma);
        return acc + soma;
    }, 0);
    return (Math.ceil(somatorio / 10) * 10) - somatorio;
}
