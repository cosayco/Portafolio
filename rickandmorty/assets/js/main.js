//Ejercicio que haremos mañana 04/10/24

// Consigna 
// Objetivo: Vas a desarrollar una página web dinámica que cargue información sobre personajes de la serie Rick and Morty utilizando la API pública de Rick and Morty. Usarás jQuery y Ajax para realizar las solicitudes de datos, y las mostrarás en forma de cards con información de cada personaje. Deberás usar funciones flecha y sintaxis moderna de ES6.

// Requisitos:
// Estructura HTML:
// Crea un archivo index.html que contenga:
// Un contenedor donde se mostrarán las 20 cards de los personajes.
// Cada card debe contener la imagen del personaje, el nombre debajo de la imagen, y el estado (vivo, muerto, desconocido) en un tamaño más pequeño.

// CSS:
// El archivo styles.css debe dar estilo a las cards de los personajes. Deben ser del mismo tamaño, estar organizadas en una cuadrícula, y tener un diseño atractivo (puedes inspirarte en otros diseños de tarjetas). Usa Flexbox para posicionarlas. (no es lo central en este módulo, no te detengas mucho tiempo aqui.)

// JavaScript (ES6):
// Usa jQuery y Ajax para hacer una solicitud a la API de Rick and Morty (https://rickandmortyapi.com/api/character) para obtener los primeros 20 personajes.
// Procesa los datos recibidos y crea dinámicamente las cards con la información de cada personaje.
// Usa funciones flecha para manipular los datos y renderizar las cards en el HTML.

// Detalles técnicos:
// Cada card debe contener:
// Imagen del personaje.
// Nombre debajo de la imagen.
// Estado del personaje (vivo, muerto o desconocido) en un tamaño de texto más pequeño.

// Si hay algún error al hacer la solicitud a la API, muestra un mensaje de error en la página.
// Recursos:

// API de Rick and Morty: La API que vas a usar es pública y no necesita autenticación. Puedes hacer solicitudes GET al endpoint https://rickandmortyapi.com/api/character para obtener datos sobre los personajes.

$(document).ready(function () {

    $.ajax({
        url: "https://rickandmortyapi.com/api/character",
        method: "GET",
        dataType: "json",
        success: function (data) {
            let html = ""
            for (let i = 0; i < data.results.length; i++) {
                html += `<div class="card">
                            <img class="card-imagen" src="${data.results[i].image}" alt="${data.results[i].name}">
                            <h2>${data.results[i].name}</h2>
                            <div class="card-cuerpo">
                                <p>
                                    Estado: ${data.results[i].status}<br>
                                    Especie: ${data.results[i].species}<br>
                                    Genero: ${data.results[i].gender}<br>
                                </p>
                            </div>
                        </div>`
            }
            $("#personajes").html(html)
        },
        error: function(error){
            alert("Hubo un error" , error.message)
        }
    })

})

