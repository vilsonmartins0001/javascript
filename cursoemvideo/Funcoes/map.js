let el=document.getElementsByTagName("div")

el=[...el]//trandforma a coleção capturada em um array "interável"

el.map((e, i)=>{ //percorre o array buscando os "elementos e índices"
 console.log(e,i)
})

//-------------------------------------------------------------------
// chamar o "map" direto a função para pegar o conteudo das divs (usando os parametros do elemento e buscando a propriedade "innerHTML")

const val=Array.prototype.map.call(el,({innerHTML})=> innerHTML ) 
// "val" recebe a propriedade "innerHTML" de todos elementos (div)
console.log(val)

//----------------------------------------------------------------------

const converterInt = (n)=>(n)
const dobrar=(n)=>n*2
let n1=['1','2','3','4','5'].map(dobrar)// percorre o array de String e chama a função de converter em numeros inteiros
console.log(n1)
console.log(n1)
//-----------------------------------------------------------------------
