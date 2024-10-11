// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista
import { creaImagen, creaTabla, creaLista } from './funciones.js';

//variables gobales
let btnAplicar = document.getElementById('aplicar');

function seleZona() {

    let zona = document.getElementById('zona').value;
    if (zona !== 'Selección de Entrada') {

        btnAplicar.disabled = true;
    } else {
        btnAplicar.disabled = false;
    }
    return zona;
}

function seleInput() {

    let entrada = document.getElementById('entrada').value;

    if (entrada !== 'Selección de Entrada') {
        let btnAplicar = document.getElementById('aplicar');
        btnAplicar.disabled = false;
    } else {
        btnAplicar.disabled = true;
    }

    return entrada;
}

/* La función enviar llama a la función importada según 
la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {

    //guardo la informacion en una variable 
    let zona = seleZona();
    let input = seleInput();

    // Seleccionar el elemento de zona donde se agregará el contenido
    let zonaElement = document.getElementById(zona);
    // Crear y agregar el contenido según la entrada seleccionada

    switch (input) {
        case 'img':
            zonaElement.appendChild(creaImagen());
            break;
        case 'table':
            // elementoCreado = creaTabla();
            break;
        case 'list':
            //  elementoCreado = creaLista();
            break;
        case 'p':
            //elementoCreado = document.createElement('p');
            break;
        default:
            return;
    }

}

window.seleZona = seleZona;
window.seleInput = seleInput;
window.enviar = enviar;