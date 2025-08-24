function soma(n1, n2){
    console.log(n1+n2)
}
soma(23,5)  // função vai fazer a ação de acordo com os parametros passados na chamada da função

function soma1(n1=0, n2=0){ //definindo valor padrão no parametro para não correr o risco de "NaN"
    console.log(n1+n2)
}
soma1(9) // quando os parametros estão prédefinidos como padrao a chamada pode ser feita sem todos parametros
//--------------------------------------------------------------------------------------


function add(v){
     valor+=v
}
let valor=0
console.log(valor)
add(4)
console.log(valor)
add(2)
console.log(valor)