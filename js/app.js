// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
    //Cuando agregas un cursos presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener( 'click', eliminarCurso );

<<<<<<< HEAD
    //Muestra los cursos en Local Storage
    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

=======
>>>>>>> a2815e1954691e233fbb2492d867f4a7fc2051ce
    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{

        articulosCarrito=[]; //reseteamos el arreglo
        limpiarHTML(); //Eliminamos todo el HTML
    })
}

//Funciones
function agregarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){

        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccionado );
    }

}

//Elimina un curso del carrito
function eliminarCurso(e){

    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso=>curso.id !== cursoId)

        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }

}

// Lee el contenido del HTML al que dimos click y extrae información del curso
function leerDatosCurso( curso ){

    // console.log( curso );

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso=> curso.id === infoCurso.id);

    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{

            if( curso.id=== infoCurso.id){
                curso.cantidad++;
                return curso; //Retorna el objeto actualizado

            }else{
                return curso; //Retorna objetos no duplicados

            }

        });

        articulosCarrito = [...cursos];

    }else{
        // Agregar elemenos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }

    console.log( articulosCarrito );

    carritoHTML();

}
 

//Muestra el carrito de compras en el HTML
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso =>{

        const {imagen, titulo, precio, cantidad, id } = curso;
        // console.log( curso );

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>

            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;

        //Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    } )

<<<<<<< HEAD
    //Agregar el carrito de compras al storage
    sincronizarStorage();

}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
=======
>>>>>>> a2815e1954691e233fbb2492d867f4a7fc2051ce
}

// Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}


