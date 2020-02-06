/* ---------------------------------------------------------------------------------------------------- 
O JavaScript possui sua tipagem dinâmica, ou seja, 
o próprio JS consegue saber que tipo é o valor atribuído à variável e
fazer o casting automático 
JavaScript é Case Sensitive - isso != Isso != iSso != issO */

let x = 3;
console.log(x+" do tipo: "+typeof(x)); // imprime: 3 do tipo number;

x = "3";
console.log(x+" do tipo: "+typeof(x));// imprime: 3 to tipo string;

/* ---------------------------------------------------------------------------------------------------- 
Variaveis - var, let e const */

var usandoVar = "pode da merda";
var usandoVar = "pq vai perder mto tempo pra achar o bug"; 
// não apresenta erro ao declarar 2x a mesma variavel

let usandoLet = "ja evita esse bug";
//let usandoLet = "vai da erro, mas mostra onde"; 
//SyntaxError: Identifier 'usandoLet' has already been declared - se declarar a mesma variavel
//var usandoLet = "facilitando e evitando futuros bugs"; 
//TypeError: Assignment to constant variable.

const usandoConst = "não vai funcionar tbm";
//const usandoConst = "igual ao let"; 
//SyntaxError: Identifier 'usandoConst' has already been declared - igual ao let
//usandoConst = "e tbm a constante não pode ser alterada";
//TypeError: Assignment to constant variable. - não pode mudar o valor de uma const (CONSTANTE)

console.log(AntesDeCriarVar);//imprime undefined
var AntesDeCriarVar = "outro bug usando o var, Hoisting";

//console.log(AntesDeCriarLet);//ReferenceError: Cannot access 'AntesDeCriarLet' before initialization
let AntesDeCriarLet = "com let ou const da erro, evitando bugs e perda de temmpo...";

/* ---------------------------------------------------------------------------------------------------- 
var: se for declarado dentro de uma função, seu escopo será aquela função, se n seu escopo será global.
const: para declarar constantes, quando n precisa mudar de valor, seu escopo sera o bloco que foi declado 
let: para declarar variavel, quando precisa mudar de valor, seu escopo sera o bloco que foi declado. 
!!!! O escopo das variáveis declaradas com let e const será o bloco em que elas foram declaradas !!!! */

(contarEDescontar = ()=> {    
    for (var contar = 0; contar <= 2; contar++) {
        console.log(contar);        
    }      
    console.log("Imprimindo o index fora do escopo: "+contar);
    // Imprimindo o var index fora do escopo: 3

    for (let descontar = 2; descontar >= 0; descontar--){
        console.log(descontar);        
    }      
    //console.log("Imprimindo o index fora do escopo :"+descontar);
    // Imprime ReferenceError: index is not defined - pq esta fora do escopo
})();