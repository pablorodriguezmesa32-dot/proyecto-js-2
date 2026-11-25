/*
Crear un menu
A tener en cuenta:
• El menú debe tener una maquetación en CSS.
• Los subapartados permanecen ocultos hasta que se pulsa sobre el apartado
correspondiente.
• Al abrir un bloque de subapartados, se cierran los demás
*/

window.onload = function(){
    let btnInicio = document.getElementById("btnInicio");
    let subInicio = document.getElementById("subInicio");

    let btnProyectos = document.getElementById("btnProyectos");
    let subProyectos = document.getElementById("subProyectos");

    let btnPortfolio = document.getElementById("btnPortfolio");
    let subPortfolio = document.getElementById("subPortfolio");

    function cerrarTodos(){
        subInicio.style.display = "none";
        subProyectos.style.display = "none";
        subPortfolio.style.display = "none";
    }

    btnInicio.onclick = function(){
        if (subInicio.style.display === "block") {
            subInicio.style.display = "none";
        }else{
            cerrarTodos();
            subInicio.style.display = "block";
        }
    };

    btnProyectos.onclick = function(){
        if (subProyectos.style.display === "block") {
            subProyectos.style.display = "none";
        }else{
            cerrarTodos();
            subProyectos.style.display = "block";
        }
    };

    btnPortfolio.onclick = function(){
        if (subPortfolio.style.display === "block") {
            subPortfolio.style.display = "none";
        }else{
            cerrarTodos();
            subPortfolio.style.display = "block";
        }
    };
};