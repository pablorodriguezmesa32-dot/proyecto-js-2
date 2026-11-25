/*
Crea una página web con un botón y un <div> vacío. Maquétalo de forma que
tenga unas medidas de 100x100px, borde y el texto aparezca centrado tanto en
horizontal como vertical.
Cada vez que el usuario pulse el botón, debe añadirse dentro del <div> un nuevo
párrafo con el texto "Párrafo número X", donde X es un contador que empieza en
1 y aumenta con cada clic.
Tanto el nuevo nodo como su contenido, debe crearse dinámicamente usando las
funciones adecuadas.
Cuando se recargue la página, el contador vuelve a empezar desde 1
*/

window.onload = function(){
    let contador = 1;
    let boton = document.querySelector("#btn");
    let botonBorrar = document.querySelector("#btnBorrar");
    let contenedor = document.querySelector("#miDiv");

    boton.onclick = function(){
        let nuevoP = document.createElement("p");
        let texto = document.createTextNode("Parrafo numero " + contador);

        nuevoP.appendChild(texto);
        contenedor.appendChild(nuevoP);

        contador++;
    };

    botonBorrar.onclick = function() {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        contador = 1; 
    };
};