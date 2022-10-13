function Animacao() {
    this.sprites = [];
}
Animacao.prototype = {
    novoSprite = function(sprite){
        this.sprites.push(sprite);
    }
    ligar: function() {

    }
}