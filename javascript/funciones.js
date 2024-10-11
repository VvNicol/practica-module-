export function creaImagen(imagenACrear) {

    let nuevaImagen = document.createElement('img');
    nuevaImagen.className = 'img-fluid';
    nuevaImagen.src = './imagenes/elcano.jpg';
    // Función que crea un elemento imagen, completa sus clases y el src (puedes usar la imagen adjunta u otra)

    // Devuelve el elemento imagen
    return nuevaImagen;
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array
}

export function creaParrafo() {
    // Crea un párrafo con texto genérico
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve
}