/*
Crea el efecto SPOILER que se puede ver en foros y otros páginas.
Se oculta el contenido de un elemento (pej, un párrafo) y sólo se muestra el mensaje
“Mostrar”. Al hacer click sobre dicho mensaje, se muestra el contenido del elemento y
el mensaje cambia a “Ocultar”. Si se pulsa sobre ese mensaje, el elemento vuelve a su
estado original (contenido oculto y mensaje “Mostrar”).
*/

window.onload = function(){

    let boton = document.getElementById("btnSpoiler");
    let contenido = document.getElementById("contenidoSpoiler");

    contenido.style.display = "none";

    boton.onclick = function(){
        if(contenido.style.display === "none"){
            contenido.style.display = "block";
            boton.innerHTML = "Ocultar"
        } else {
            contenido.style.display = "none";
            boton.innerHTML = "Mostrar";
        }
    };
};