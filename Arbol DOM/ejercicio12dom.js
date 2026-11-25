/*
Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
• Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
pantalla.
• Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.

b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
página correctamente

c) Realizar el mismo ejercicio pero esta vez la imagen se moverá hacia la derecha
mientras el ratón esté encima de ella. Coloca un botón para resetear los valores de
posición de la imagen
*/

//A Y B
window.onload = function(){
    let divImg = document.getElementById("miDiv");
    let btnIzq = document.getElementById("btnIzquierda");
    let btnDer = document.getElementById("btnDerecha");

    let posicionX = 0;

    btnDer.onclick = function(){
        if(posicionX < 800){
            posicionX = posicionX + 5;
            divImg.style.left = posicionX + "px";
        }
        
    };

    btnIzq.onclick = function(){
        if(posicionX > 0){
            posicionX = posicionX -5;
            divImg.style.left = posicionX + "px";
        }
        
    };
    
    //C
    let btnReset = document.getElementById("btnReset");
    let timer = null;

    divImg.onmouseover = function(){
        if(timer === null){
            timer = setInterval(function(){
                if(posicionX < 800){
                    posicionX = posicionX + 5;
                    divImg.style.left = posicionX + "px";
                }
            }, 100);
        }
    };

    divImg.onmouseout = function(){
        clearInterval(timer);
        timer = null;
    };

    btnReset.onclick = function(){
        clearInterval(timer);
        timer = null;
        posicionX = 0;
        divImg.style.left = posicionX + "px";
    }
};