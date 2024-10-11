export function creaImagen(imagenACrear) {

    let nuevaImagen = document.createElement('img');
    nuevaImagen.className = 'img-fluid';
    nuevaImagen.src = './imagenes/elcano.jpg';
  
    return nuevaImagen;
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ];

    // Crear la tabla y su estructura
    let crearTable = document.createElement('table');
    crearTable.className = 'table';
    crearTable.id = 'tablaHuracan';

    let crearThead = document.createElement('thead');
    let encabezado = `
        <tr>
            <th scope="col">Categoría</th>
            <th scope="col">Velocidad (km/h)</th>
        </tr>
    `;
    crearThead.innerHTML = encabezado;

    let crearTbody = document.createElement('tbody');

    // Rellenar la tabla con las filas del array
    arrayHuracanes.forEach(h => {
        let fila = `
            <tr>
                <td>${h.cat}</td>
                <td>${h.vel}</td>
            </tr>
        `;
        crearTbody.innerHTML += fila;
    });

    // Agregar el encabezado y el cuerpo a la tabla
    crearTable.appendChild(crearThead);
    crearTable.appendChild(crearTbody);

    return crearTable;
}


export function creaParrafo() {
    let crearP = document.createElement('p');
    crearP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis magna. Sed eget accumsan ipsum. Suspendisse eget neque leo. Aliquam erat volutpat. Quisque commodo vel eros id iaculis. Morbi facilisis nibh ut ante scelerisque, at vestibulum urna fringilla. Integer hendrerit ac odio eget luctus. In euismod tempor urna, eget auctor eros aliquam eget.'
    return crearP;
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve
    let crearUl = document.createElement('ul');
    crearUl.className = 'list-group';
    
    lista.forEach(l =>{
        let fila = `
             <li class="list-group-item">${l}</li>
        `;
        crearUl.innerHTML += fila;
    });

    return crearUl;

}