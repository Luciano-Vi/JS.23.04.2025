document.write("<h1>Hola JavaScript </h1>")

// Comentarios de una linea

/* comentario de Bloque */

let nombre="carlos"

//Array

let datos=["Ana","Pablo","Carlos"]

let edades=[14,34,22]

let objetoDatos={
    nombre:"Carlos",
    edad:25,
    cuenta:"alumno",
    notas:[6.8,6.2,7.0]
}

console.log(datos)
console.log(edades)
console.log(objetoDatos)

// Operadores Relacionales

/*
<
>
>=
<=
!=
== modulo
===
*/

let uno=1
let uno_string=1

console.log(uno===uno_string)

//estructura de control

if(uno===uno_string)
    console.log("son iguales?")
if(uno===uno_string){
    console.log("son iguales iguales")
}
else{
    console.log("No son iguales")
}

let datosAlumnos="diurno"

switch(datosAlumnos){
    case 'diurno':
        console.log("es Alumno del dia")
        break;
    case 'vespertino':
        console.log("es Alumno dde la noche")
        break;
    default:
        console.log("No Es Alumno")
}

//ciclos

//while

/*
Mostrar los primeros numeros positivos
*/

let cont=1

while(cont<=10){
    console.log(cont)
    cont=cont+1
}

//fon

let nombres=["Ana","Pablo","Carlos"]

for(let i=0;i<nombres.length;i++){
    console.log(nombres[i])
}

//funciones

function mensaje(){
    console.log("hola")
}

mensaje()

// Notas: if( numero % 2 == 0)

/*
Muestre la cantidad de numeros pares que
existen en un arreglo use una funcion que 
retorne si el numero es par o no 

TAREA
modificar para que muestre la cantidad de impares
*/

let numeros = [45,33,22,14,8,24,3,12,1,44]
let contp = 0
function contadorpares(num){
    if(num % 2 == 0)
        return true
    return false
}

for(let i=0;i<numeros.length;i++){
    if(contadorpares(numeros[i]))
        contp++;
}

console.log(contp)