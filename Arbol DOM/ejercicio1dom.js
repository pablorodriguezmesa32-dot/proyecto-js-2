/*
    Crear una tabla de 4x4 y que tengan los atributos:
    - Width = “300px”
    - Height = “200px”
    - Border = “1px”
    - Align = “center”
    Pide al usuario:
    - Nueva anchura
    - Nueva altura
    Pide al usuario un número entero:
    Suma ese número al grosor del borde y pones como borde el nuevo grosor.

    NO HAY PROMPT EN ESTE APARTADO.
    Cada vez que se pulsa el botón c, cambia el valor de align de left a center, de center a right y de right a left

    */

function modificarTabla() {
    var tabla = document.getElementById("miTabla");

    var nuevoAncho = prompt("Nueva anchura:");
    if (nuevoAncho) {
        tabla.setAttribute("width", nuevoAncho);
    }

    var nuevoAlto = prompt("Nueva altura:");
    if (nuevoAlto) {
        tabla.setAttribute("height", nuevoAlto);
    }

    
    var numBorde = prompt("Introduce un número entero para sumar al borde:");
    if (numBorde != null) {
        var bordeActual = parseInt(tabla.getAttribute("border")) || 0;
        var suma = parseInt(numBorde);
        
        if (!isNaN(suma)) {
            var nuevoBorde = bordeActual + suma;
            if (nuevoBorde < 0) nuevoBorde = 0;
            tabla.setAttribute("border", nuevoBorde);
        }
    }
}

function cambiarAlign(event) {
    
    var tecla = event || window.event;
    
    // Comprobamos si se ha pulsado la 'c' o 'C'
    if (tecla.key === 'c' || tecla.key === 'C') {
        var tabla = document.getElementById("miTabla");
        var alignActual = tabla.getAttribute("align");

        if (alignActual === "left") {
            tabla.setAttribute("align", "center");
        } else if (alignActual === "center") {
            tabla.setAttribute("align", "right");
        } else {
            tabla.setAttribute("align", "left");
        }
    }
}