console.log("Hello, World");

function add( a:number,b:number){
    return a+b;
}
//analisis estatico al codigo
const sum =add(6,3);

// TIPOS DE DATOS
// booleanos

let muted :boolean = true;
muted=false;
//muted='camion'

// numericos

let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador / denominador;

// string
let nombre:string='Enrique'
let saludo = `Me llamo ${nombre}`;

// Arreglos: tu decides si va ser de un solo tipo o no

let people:string[] =[];
people=["Isabel","Monica","Raul"];
//people.push('9')

let peopleAndNumbers:Array<string|number>=[];
peopleAndNumbers.push("Roberto")
peopleAndNumbers.push(9000)

// Enum
enum Color{
    Rojo ="Rojo",
    Verde="Verde",
    Azul="Azul"
}
let colorFavorito:Color= Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin:any ='Joker';
comodin={type:'wilcard'}

// Object

let someObject:object ={type:'wildcard'}

// Documentacion: https://www.typescriptlang.org/docs/handbook/basic-types.html

function add1(a:number,b:number):number{
    return a+b;
}

//funciones regresan otras funciones
function createAdder(a:number):(number)=>number{
    return function(b:number){
        return b+a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName:string,lastName ='chalco'  ):string{
    return `${firstName} ${lastName}`;
}

const nombre1 =fullName('enrique');
console.log(nombre1);

//Interface: forma exacta en la que se va definir un objeto

interface Rectangulo {
    ancho:number,
    alto:number,
    color?:Color
}

let rect : Rectangulo = {
    ancho: 6,
    alto:4,
    //color:Color.Verde,
}

function area (r:Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

//console.log(rect.toString());
rect.toString = function(){
    return this.color ?`Un rectangulo ${this.color}`:`Un rectangulo`;
}
console.log(rect.toString());