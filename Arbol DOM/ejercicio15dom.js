/*
 Crear el mismo menú que el ejercicio anterior pero en horizontal. Ahora, al pasar el
ratón por encima de cada apartado, aparece el bloque de subapartados correspendiente.
A tener en cuenta:
• El menú debe tener una maquetación en CSS.
• El bloque de subapartados quedará por encima del resto de elementos que tenga
debajo (pej, sections, articles...), no desplazará al resto de elementos.
• Un bloque de subapartados desaparecerá cuando se pase por encima de otro
apartado.
*/

window.onload = function(){
    let btnInicio = document.getElementById("btnInicio");
    let subInicio = document.getElementById("subInicio");

    let btnProyectos = document.getElementById("btnProyectos");
    let subProyectos = document.getElementById("subProyectos");

    let btnPortfolio = document.getElementById("btnPortfolio");
    let subPortfolio = document.getElementById("subPortfolio");

    function ocultarTodos(){
        subInicio.style.display = "none";
        subProyectos.style.display = "none";
        subPortfolio.style.display = "none";
    }

    btnInicio.onmouseover = function(){
        ocultarTodos();
        subInicio.style.display = "block";
    };

    btnProyectos.onmouseover = function(){
        ocultarTodos();
        subProyectos.style.display = "block";
    };

    btnPortfolio.onmouseover = function(){
        ocultarTodos();
        subPortfolio.style.display = "block";
    };

    btnContacto.onmouseover = function(){
        ocultarTodos();
    };
};