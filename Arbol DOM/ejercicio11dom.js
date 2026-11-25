/*
Crea tres DIV de tamaño 300x100px con un color de fondo distinto cada uno y con
un texto en su interior que indique “Soy el DIV X” (siendo X un número del uno al
tres).
a) Oculta el segundo DIV usando la propiedad visibility de CSS. Consigue
que ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
primer DIV.
b) Oculta el segundo DIV usando la propiedad display de CSS. Consigue que
ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
primer DIV.
*/

window.onload = function(){

    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");

    div1.onmouseover = function(){
        div2.style.display = "block";
    };

    div1.onmouseout = function(){
        div2.style.display = "none";
    };
};