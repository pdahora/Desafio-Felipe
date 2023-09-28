function Classificacao(nomeJogador, exp) {
    if (exp == 1000) {
        return nomeJogador + ", seu nível é: bronze"
    }
    else if (exp > 1010 && exp <= 2000) {
        return nomeJogador + ", seu  nível é: prata"
    }
    else
        return nomeJogador + ", seu  nível é: baixo"

}
let nomeJogador = "Valente";
let exp = 1350;
let classificacao = Classificacao(nomeJogador, exp);

console.log(classificacao);