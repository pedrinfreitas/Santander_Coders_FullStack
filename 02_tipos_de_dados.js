// pra n precisar escrever console.log
const print = variavel => console.log(variavel);

//number, numeros inteiro, com decimal... tbm tem o BigInt para numeros grandes
let numeroInteiro = 1, numeroComDecimal = 1.5;

//String, texto, fica dentre de aspas duplas, simples ou invertida(conceito de templates string)
let texto = "dentro de aspas duplas", tbmETexto = 'ou aspas simples', OutraFormaDeTexto = `aspas invertidas`;

//Boolean, logicos ou boleanos, verdadeiro ou falso
let falsoOuVerdadeiro = true, verdadeiroOuFalso = false;

//Object, Objeto, coleção
let objeto = {nome: "Pedro Freitas", Idade: 21 };

//Array, vetor não e um tipo de dado, é um tipo especial de objeto, começa do indice 0
let vetorDeFrutas = ["cupuaçu", "jaca", "cambuca", "abacate"];
vetorDeFrutas[0]; //imprime cupuaçu

//NanN NOT A NUMBER
let resultado = numeroInteiro / texto;
print(resultado);//Imprime NaN, não é um numero

//NULL, valor nulo
let valorNulo = null;
print(valorNulo);//Imprimi null

//UNDEFINED, indefinido
let umVariavelQueNaoFoiDefinida;
print(umVariavelQueNaoFoiDefinida)
print(vetorDeFrutas[4]);//

//SYMBOM, Simbolo, Cada valor retornado é único, pode ser usado como o identificador para propriedades de objetos
let simboloUm = Symbol("simbolo"), simboloDois = Symbol("simbolo");
(Symbol("simbolo") === Symbol("simbolo"))?print("verdadeiro"):print("false");
//Imprime false



