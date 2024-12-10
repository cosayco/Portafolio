const caracteres = 'ABC123';
let codigoSecreto = generarCodigo();
let intentos = 10;

function generarCodigo() {
  let codigo = '';
  while (codigo.length < 4) {
    const caracter = caracteres[Math.floor(Math.random() * caracteres.length)];
    if (!codigo.includes(caracter)) {
      codigo += caracter;
    }
  }
  return codigo;
}

function comprobarIntento() {
  const intento = document.getElementById('intento').value.toUpperCase();
  if (intento.length !== 4 || !/^[ABC123]{4}$/.test(intento)) {
    alert('El código debe tener exactamente 4 caracteres entre (A-C, 1-3).');
    return;
  }

  const pista = evaluarIntento(codigoSecreto, intento);
  document.getElementById('pista').textContent = pista;

  intentos--;
  if (pista === 'Correcto Correcto Correcto Correcto') {
    alert('¡Felicidades! Has descifrado el código.');
  } else if (intentos === 0) {
    alert('¡Lo siento! Se te acabaron los intentos.');
  }
}

function evaluarIntento(codigoSecreto, intento) {
    const pista = [];
    const codigoSecretoArray = codigoSecreto.split('');
    const intentoArray = intento.split('');
  
    intentoArray.forEach((caracter, index) => {
      if (caracter === codigoSecretoArray[index]) {
        pista.push('Correcto');
        codigoSecretoArray[index] = ''; // Marca el caracter como usado
      }
    });
  
    intentoArray.forEach((caracter, index) => {
      if (pista[index] !== 'Correcto' && codigoSecretoArray.includes(caracter)) {
        pista.push('Presente');
        const indice = codigoSecretoArray.indexOf(caracter);
        codigoSecretoArray[indice] = ''; // Marca el caracter como usado
      } else if (pista[index] === undefined) {
        pista.push('Incorrecto');
      }
    });
  
    return pista.join(' ');
}