//funciones

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Paulina")

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Armando")

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Rodrigo")

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Jonathan")

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Erick")

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Bernarda")

// alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. Helmo")

// const saludo = (nombre) => {
//     alert("Hola, espero que estes muy bien y disfrutes de la clase de hoy. " + nombre)
// }

// saludo("Paulina")
// saludo("Armando")
// saludo("Rodrigo")
// saludo("Jonathan")
// saludo("Erick")
// saludo("Bernarda")
// saludo("Helmo")

// const nombreApellido = (nombre, apellido, edad) => {
//     alert("Hola, tu nombre es. " + nombre + " y tu apellido es: " + apellido)
//     console.log(edad*4)
// }

// nombreApellido("Paulina", "Ahumada", 25)
// nombreApellido("Armando", "Marin", 20)
// nombreApellido("Rodrigo", "Donoso", 23)

//-------------------------------------
//Condicionales
//llueve --> al cine  -->si llueve vamos al cine, 
//sol --> a la playa  -->si esta soleado vamos a la playa 
//cuaquier otro clima -->sino nos quedamos en casa
// var clima = prompt("escriba el clima")

// if(clima === "llueve") {
//     console.log("vamos al cine")
// } else if(clima === "soleado"){
//     console.log("vamos a la playa")
// } else {
//     console.log("nos quedamos en casa")
// }

//-------------------------------------
//Hay 3 tipos de iguales =

//el primer =, es uno solo y se usa para darle el valor a una variable ejemplo:  
//var edad = 12

//cuando tenemos == es una identidad, que tiene en cuenta el valor pero no el tipo.

// 1 == "1" --> verdadero

//cuando tenemos === es una identidad, que tiene en cuenta el valor y el tipo.

// 1 === "1" --> falso?


// var numero = prompt()  // -> "1"

// if(numero === 1) {
//     console.log("verdadero")
// } else {
//     console.log("falso")
// }

//-------------------------------------

//ACTIVAD: hagan una función que si recibe la palabra mujer devuelva console.log(Bienvenida) si si recibe la palabra varon devuelva console.log(Bienvenido)

//Resultado:
// const bienvenida = (genero) =>{
//     if(genero === "mujer"){
//         console.log("Bienvenida")
//     }
//     else if(genero === "varon"){
//         console.log("Bienvenido")
//     }
//     else{
//         console.log("Bienvenido/a")
//     }
// }
// bienvenida("mujer")


//-------------------------------------

//condicional switch
// var frutaYVerdura = prompt("Escriba su fruta o verdura")

// switch (frutaYVerdura) {
//     case "banana":
//         console.log("La banana es una fruta")
//         break;
//     case "pera":
//         console.log("La pera es una fruta")
//         break;
//     case "lechuga":
//         console.log("La lechuga es una verdura")
//         break;
//     case "papa":
//         console.log("La papa es una verdura")
//         break;
//     default:
//         console.log("no encontramos registro de: " + frutaYVerdura)
//         break;
// }

//-------------------------------------

// Operadores de comparacion
// == doble igualdad
// === triple igualdad
// != doble negacion
// !== triple negacion
// 5 > 3
// 3 < 5
// 3 >= 3
//  3 === 3 && 5 === 5 --> true
//  3 === 3 && 5 === 4 --> false
// 3 > 4 || 4 > 3  --> true
// 3 > 4 || 4 > 5  --> false


//-------------------------------------

//Ejercicio: si sos mayor de 18 años podes ingresar a la página para comprar alcohol.

// var edad = parseInt(prompt("dime tu edad"))

// if(edad <= 17){
//     alert("Busca un mayor que compre por vos")
// } else {
//     alert("Bienvenido a la página")
// }


//-------------------------------------

//Ejercicio dos: Se van al campo con el colegio. si sos mayor y pagaste, vas. si sos menor pero tenes autorizacion de tus padres pagaste, vas. si no pagaste no vas.

// var edad = parseInt(prompt("dime tu edad"))
// var autorizacion = prompt("¿Tiene autorizacion? si o no")
// var pago = prompt("¿efectuo el pago? si o no")

// if(pago === "no") {
//     alert("no puedes ir por falta de pago")
// } else if(edad >= 18 || autorizacion === "si"){
//     alert("Disfruta tu dia de campo")
// } else {
//     alert("Pidele autorización a tus padres")
// }