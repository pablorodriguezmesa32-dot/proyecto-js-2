/*
Crea tres DIV de tamaño 100x100px y con un color de fondo diferente cada uno.
Al pasar por encima de alguno de esos DIVs, el color de fondo de la página debe
cambiar al color que tenga el DIV sobre el que está el cursor del ratón.
b) Añade el código necesario para que el color de la página vuelva a su color
original si el cursor del ratón no está encima de ninguno de los DIVs del ejercicio.
*/

window.onload = function(){

    let d1 = document.getElementById("div1");
    let d2 = document.getElementById("div2");
    let d3 = document.getElementById("div3");

    let colorOriginal = document.body.style.backgroundColor;

    //ROJO:
    d1.onmouseover = function(){
        document.body.style.backgroundColor = "red";
    };

    d1.onmouseout = function(){
        document.body.style.backgroundColor = colorOriginal;
    };

    //VERDE:
    d2.onmouseover = function(){
        document.body.style.backgroundColor = "green";
    };

    d2.onmouseout = function(){
        document.body.style.backgroundColor = colorOriginal;
    };

    //AZUL
    d3.onmouseover = function(){
        document.body.style.backgroundColor = "blue";
    };

    d3.onmouseout = function(){
        document.body.style.backgroundColor = colorOriginal;
    };
};