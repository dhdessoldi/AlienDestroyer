//função construtora
function Carro(cor, velocMaxima) {
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;
}

//prototype com os métodos

Carro.prototype = {
    acelerar: function(){
        this.velocAtual += 10;
    }
}