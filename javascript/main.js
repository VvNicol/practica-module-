// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista
import { creaImagen, creaTabla, creaLista, creaParrafo } from './funciones.js';

//variables gobales
let btnAplicar = document.getElementById('aplicar');

function seleZona() {

    let zona = document.getElementById('zona').value;
    verificacionBtn()
    return zona;
}

function seleInput() {

    let entrada = document.getElementById('entrada').value;

    verificacionBtn();

    return entrada;
}

function verificacionBtn(){
    let zona = document.getElementById('zona').value;
    let entrada = document.getElementById('entrada').value;

    if(zona !== 'Selección de zona' && entrada !== 'Selección de Entrada'){
        btnAplicar.disabled = false;
    }else{
        btnAplicar.disabled = true;
    }
}

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
            zonaElement.appendChild(creaTabla());
            break;
        case 'list':
            zonaElement.appendChild(creaLista());
            break;
        case 'p':
            zonaElement.appendChild(creaParrafo());
            break;
        default:
            return;
    }

}
function btnLimpiar(){
    let btnLimpiar = document.getElementById('limpiar')
    btnLimpiar.disabled = true;

    let zona = seleZona();
    let zonaLimpiar = document.getElementById(zona);

    zonaLimpiar.innerHTML = '';
    return btnLimpiar

}

window.seleZona = seleZona;
window.seleInput = seleInput;
window.enviar = enviar;