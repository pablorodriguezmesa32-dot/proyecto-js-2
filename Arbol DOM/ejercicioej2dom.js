/*
nextSibiling, previousSibiling
*/

window.onload = function(){
    let boton = document.querySelector("#btnIntercambiar");
    let imagen = document.querySelector("img");
    let parrafo = document.querySelector("p");

    boton.onclick = function(){
        let padre = imagen.parentNode;

        if(imagen.nextSibling === parrafo){
            padre.insertBefore(parrafo, imagen);
        }else{
            padre.insertBefore(imagen, parrafo);
        }
    };
};