function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

let arrayNumeros = [];

let nroMaximo = 10;
let vidas;

function numeroAleatorio() {
    let nro = Math.floor(Math.random() * 10) + 1;
    console.log(nro);
    console.log(arrayNumeros);
    if (arrayNumeros.length == nroMaximo) {
        asignarTexto('h1', '¡Fin del juego!');
        asignarTexto('.texto__parrafo', 'No quedan más números para adivinar. Por favor, recague la pagina');
    } else if (arrayNumeros.includes(nro)) {
        return numeroAleatorio();
    } else {
        arrayNumeros.push(nro);
        return nro;
    };
}

let numeroAleatorioGenerado;
//let intentos;

function condicionesIniciales() {
    asignarTexto('h1', 'Adivina el número');
    asignarTexto('.texto__parrafo', `Elige un número entre 1 y ${nroMaximo}`);
    numeroAleatorioGenerado = numeroAleatorio();
    //intentos = 1;
    vidas = 3;
}

condicionesIniciales();

function limpiarInput() {
    document.getElementById('valorUsuario').value = '';
}

function verificarNro() {
    let nroUsuario = parseInt(document.querySelector('#valorUsuario').value);
    if (nroUsuario === numeroAleatorioGenerado) {
        asignarTexto('h1', '¡Ganaste!');
        //asignarTexto('.texto__parrafo', `¡Felicidades! Acertaste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        asignarTexto('.texto__parrafo', `¡Felicidades! Te quedan ${vidas} ${vidas === 1 ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if (nroUsuario < numeroAleatorioGenerado) {
        asignarTexto('.texto__parrafo', `El número es menor. Vidas restantes: ${vidas - 1}/${vidas}`);
        vidas--;
        //intentos++;
        limpiarInput();
    } else {
        asignarTexto('.texto__parrafo', `El número es menor. Vidas restantes: ${vidas - 1}/${vidas}`);
        vidas--;
        //intentos++;
        limpiarInput();
    }

    if (vidas == 0) {
        asignarTexto('h1', '¡Perdiste!');
        asignarTexto('.texto__parrafo', `El número era ${numeroAleatorioGenerado}. Por favor, recarga la página para jugar de nuevo`);
        document.querySelector('.container__boton').setAttribute('disabled', true);
    }
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
};