/*agregar comentario alf+shift+a */
/* comentar
varias 
lineas */

// comentar una linea


//console.log("Hola Mundo")
//console.log("aqui podemos escribir cualquier cosa")
/*console.log("adios")
console.log("no hay autocompletado")
console.log(123456)
console.log(-1.123)*/


//tipos d datos
/* declara una variable */
let nombre = "Marisell"
// console.log(nombre)
nombre = "juan"
//console.log(nombre)

/* declara una constante */

const pi = 3.1416


const numero1 = 7;
const numero2 = 9;
const resultado = numero1 + numero2
//console.log("resultado", resultado, "algo")


//Strings - texto
const ciudad = "Bogota"
const pais1 = "Colombia"
const pais2 = "Argentina"
//console.log(Ciuda, pais1, pais2)



//Lenguaje debilmente tipado
//Int, Float - numeros
const suma = 5
const edad = 20.5
const numeronegativo = -10
//console.log ("multiplicacion,5*5")

//console.log(suma, edad, numeronegativo)

//Booleanos - Bool - verdadero o falso
let esVerde = true
let esMorado = false

//--------ESTRUCTURA DE DOTOS---------

//  Array  - vectores - listas
let listaDeNumeros = [20, -55, 100]
//console.log(listaDeNumeros)

//ver un elemento de la lista
/*console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2])*/
let listaCiudades = ["bogota", "medellin", "cali", "boyaca"]
//console.log(listaCiudades)
let listaDeListas = [listaDeNumeros, listaCiudades]
//console.log(listaDeListas)

// aceder al dato de "medellin"
//console.log(listaDeListas[1][1]) 

// JSON javascript objeto Notativo-objetos
// nombre de la propidad-y valor de la propidad
let usuario = {
    nombre: "Marisell",
    edad: 45,
    ciudad: "bogota",
    ubicacion: {
        latitud: 1.5356453,
        longitud: 2564820

    }
}
//console.log(usuario)
//console.log(usuario.nombre)
//console.log(usuario.ubicacion.latitud)
amigos:["andres", "pepito"]

usuario.edad = 49

// tipos de datos vacios 
// null - nulo
let espaciovacio = null
let algo
//console.log(algo)


// undefined - indefinido
let NoDefinido = undefined
//console.log(usuario.apellido)

// NON -not a Nomber = no es un numero
const noEsNumero = NaN
const multiplicacion = 10 * "hola"
//console.log(multiplicacion)



//------------Estrutura de control--------


//Bucles - un proceso que se repite
//Loop - bucle infinito

const listaAnimales = [
    "perro",
    "gato",
    "oso",
    "gallina",
    "lobo",
    "zorro",
]
console.log( "cualquier cosa")

//console.log("tamaño del array :",listaAnimales.length)


//parametro 1: contador
//parametro 2: condicionpara que se detenga
//parametro 3: comportamiento del contador
//for(let contador =0; contador < listaAnimales,length; contador = contador

for(let i = 0; i  < listaAnimales.length; i ++) {
    console.log (i)
    console.log(listaAnimales[i])

}
// condiciones
// -igualdad: ===
// -diferente de :!==
// - menor que: <
// - mayor que: >
// - menor o igual que: <=
// - mayor o igual que: >=

let numero = 1

if(numero === 10) {
    console.log("numero es 10")
} else if (numero === 11) {
    console.log("numero es 11")
} else if (numero === 12) {
    console.log("numero es 12")
} else {
    console.log("no es ni 10 ni 11 ni 12")
}

//-------------Operadores Logicos----------
// and - y -&&
// or - o -||

let texto = "algo"
if(texto === "a" || texto === "b" || texto === "c"){
    console.log("la condicion es verdader")
} else{
    console.log("el texto no 'a' ni 'b'")
}
// and - y -&&
let numero3 = 20
if(numero3 > 0 && numero < 10) {
console.log("nuestro numero esta entre el 0 y el 10")
} else{
    console.log("nuestro numero no esta entre el 0 y el 10")
}


//------------------bucles  - while -   mientras------------

let contador = 0
while(contador < 5) {
    console.log("ciclo",contador)



    // contdor = + 1
    contador++

}
//----------------------Funciones-----------------
// Estructura que resiben parametros , procesarlos
// Y devolver parametros

// caracteristicas
// 1. agrupar codigo relacionado con un mismo fin cieto objectivo
// 2. La funcion es reutilisable

//declaracion de la funcion javascript de la forma antigua
function sumar( valor1,valor2) {
    console.log("parametro1:", valor1)
    console.log("parametro2:",valor2)

   // console.log("esta funcion esta sumando")
    let resultado = valor1 + valor2
   // console.log("mostrar el resultado",resultado)

    return resultado
}

// declaracion con ECMAscript 
//funcion fecha

const sumar = () => {
    let resultado =valor1 + valor2 
    return resultado
}
// Ejecucion de la funcion \\ llamado a la funcion

 let resultadoSuma = sumar(5, 10)
 //console.log("resultado de la suma1",resultadoSuma)

console.log ("resultado de la suma2", sumar(50,15))

console.log ("resultado de la suma2", sumar(100,8))
console.log ("resultado de la suma2", sumar(20,15))
console.log ("resultado de la suma2", sumar(5,53))
















