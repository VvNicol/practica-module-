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
    zonaElement.innerHTML = '';

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

    gestionarBtnLimpiar();
}

function gestionarBtnLimpiar() {
    let limpiarGrid = document.getElementById('limpiar');
    let zonas = ['A', 'B', 'C', 'D'];

    // Verificar si alguna zona tiene contenido
    let tieneContenido = zonas.some(z => {
        let zonaElement = document.getElementById(z);
        return zonaElement.innerHTML.trim() !== ''; // Verificar si hay contenido
    });

    // Activar o desactivar el botón "Limpiar Grid" según si hay contenido
    limpiarGrid.disabled = !tieneContenido;
}

function limpiarTodo() {
    let zonas = ['A', 'B', 'C', 'D'];

    zonas.forEach(z => {
        let zonaElement = document.getElementById(z);
        zonaElement.innerHTML = ''; // Limpiar el contenido
    });

    // Desactivar el botón "Limpiar Grid" después de limpiar
    let limpiarGrid = document.getElementById('limpiar');
    limpiarGrid.disabled = true;
}


window.seleZona = seleZona;
window.seleInput = seleInput;
window.enviar = enviar;
window.limpiarTodo = limpiarTodo;