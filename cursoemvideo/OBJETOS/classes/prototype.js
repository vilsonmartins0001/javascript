const Nave=function(energia){
    this.energia=100
    this.disparos=10
}

const n1=new Nave(100)

//-------------------- com o prototype conseguimos inserir metodos e propriedade nas classes -----------------

Nave.prototype.vidas=5

Nave.prototype.atirar=function(){
    if(this.disparos>0){
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.disparos)
console.log(n1.vidas)

n1.atirar()
n1.atirar()
n1.atirar()
n1.atirar()

console.log(n1.disparos)