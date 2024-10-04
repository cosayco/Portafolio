function generarNumerosAleatorios(cantidad) {
    // Validación de la entrada
    if (cantidad <= 0) {
      mostrarError("La cantidad de números debe ser mayor que cero.");
      return;
    }
  
    // Crear un conjunto para almacenar los números únicos
    const numeros = new Set();
  
    // Generar números aleatorios hasta llenar el conjunto
    while (numeros.size < cantidad) {
      const numero = Math.floor(Math.random() * 25) + 1;
      numeros.add(numero);
    }
  
    // Convertir el conjunto a un array y ordenarlo
    const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);
  
    // Mostrar los resultados en la lista HTML con un retraso
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
  
    let contador = 0;
    const mostrarNumero = () => {
      if (contador < numerosOrdenados.length) {
        const li = document.createElement('li');
        li.textContent = numerosOrdenados[contador];
        resultados.appendChild(li);
        contador++;
        setTimeout(mostrarNumero, 1000); // Ejecutar la función nuevamente después de 1 segundo
      }
    };
  
    mostrarNumero(); // Iniciar el proceso de mostrar números
  }
  
  function mostrarError(mensaje) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
  }
  
  function ocultarError() {
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'none';
  }
  
  // Obtener los elementos del DOM
  const cantidadInput = document.getElementById('cantidadNumeros');
  const generarButton = document.getElementById('generar');
  
  // Agregar un event listener al botón generar
  generarButton.addEventListener('click', () => {
    const cantidad = parseInt(cantidadInput.value);
    generarNumerosAleatorios(cantidad);
  });
  
