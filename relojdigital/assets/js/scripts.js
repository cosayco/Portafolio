const $ = (selector) => {
    return document.querySelector(selector);
}

const hora = $('.hora');
const puntos = $('.puntos');
const min = $('.min');
const dia = $('.dia');
let showDot = true;

function update() {
    showDot = !showDot;
    const ahora = new Date();
    const diasem = Array.from(dia.children);

    if (showDot) {
        puntos.classList.add('invisible');
    } else {
        puntos.classList.remove('invisible');
    }
    hora.textContent = String(ahora.getHours()).padStart(2, '0');
    min.textContent = String(ahora.getMinutes()).padStart(2, '0');

    diasem.forEach(ele => {
          ele.classList.remove('activo');
    });    

    diasem[ahora.getDay()].classList.add('activo');
};

setInterval(update, 500);