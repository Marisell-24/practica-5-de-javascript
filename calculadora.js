// ---------Ejercicio de lectura y escritura--------
const mostrarValor = () => {
    //getElementById = obtener elementos del ID
    const input1 = document.getElementById('valor1')

    let valor1 = input1.value
    console.log(valor1)
    
    const span = document.getElementById('input-valor')
    console.log(span)
    console.log(span.innerHTML)
    span.innerHTML = valor1

}

//----------Calculadora--------

//leerInputs debe leer dos inputs,validarlo
//volver estos valores
const leerInputs = () => {
    console.log("leyendo input...")

}
// realizarOperacion debe recibir el tipo de
// opracion, realizar la operacion con los dos
// valores de los inputs y volver un resultado
const realizarOperacion = (operacion) => {
    leerInputs()
    console.log(operacion)
}
// mosstrarResultados debe recibir el resultado
// de la operacion y mostrarlo al usuario,
// que se realizo
const mostrarResultado = () => {

}





