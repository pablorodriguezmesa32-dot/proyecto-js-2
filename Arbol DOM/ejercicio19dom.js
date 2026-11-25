/*
En HTML, crea una lista de 3 elementos y el botón “Añadir”. Al pulsar sobre el
botón, se le pide al usuario que meta una cadena de texto y se creará una nueva entrada
en la lista con el texto indicado
*/

window.onload = function(){
    let boton = document.getElementById("btn-aniadir");

    boton.onclick = function(){
        let textito = prompt("Introduce tu puto texto: ");

        if(textito !== null && textito.trim() !== ""){
            let nuevoLi = document.createElement("Li");
            let nodoTexto = document.createTextNode(textito);

            nuevoLi.appendChild(nodoTexto);

            let listaPadrisima = document.getElementById("listita");
            listaPadrisima.appendChild(nuevoLi);
        }
    };
};