/*
En HTML, crea un párrafo con varias lineas de texto, y tres botones: ‘Generar’,
‘Borrar Viejo’ , ‘Borrar Nuevos’ (deshabilitado) y ‘Sustituir’. Nada lleva ID así que no
puedes usar getElementById.
En CSS, crea dos clases para maquetar el párrafo (pon anchura, altura, borde, tamaño de
letra…) y haz que el párrafo anterior pertenezca a la primera clase.
Programa el siguiente funcionamiento de los botones:
• Generar: cada vez que se pulse, crea un nuevo párrafo similar al que ya existe
pero maquetado con la segunda clase. Todos los párrafos generados serán
hermanos.
• Borrar Viejo: elimina el párrafo que sale por defecto en la página. Al hacer eso,
este botón y el botón ‘Sustituir’ quedan bloqueados.
• Borrar Nuevos: este botón está bloqueado al principio y se desbloquea al pulsar
el botón ‘Generar’. Su cometido es borrar TODOS los párrafos generados por el
botón generar.
• Sustituir: este botón sustituye el párrafo inicial por una tabla de dos filas y dos
celdas con números en su interior. Recuerda que este botón estará bloqueado si
se borra el párrafo inicial con el botón ‘Borrar Viejo’.
*/

window.onload = function() {
    
    let parrafoOriginal = document.querySelector("p");
    let btnGenerar = document.querySelector(".btn-generar");
    let btnBorrarViejo = document.querySelector(".btn-borrar-viejo");
    let btnBorrarNuevos = document.querySelector(".btn-borrar-nuevos");
    let btnSustituir = document.querySelector(".btn-sustituir");

   
    btnGenerar.onclick = function() {
        let nuevoP = document.createElement("p");
        let textoP = document.createTextNode("Este es un párrafo nuevo generado dinámicamente.");
        nuevoP.appendChild(textoP);

        nuevoP.classList.add("clase-dos");

        document.body.insertBefore(nuevoP, document.querySelector(".contenedor-botones"));

        btnBorrarNuevos.disabled = false;
    };

    btnBorrarViejo.onclick = function() {
        if (parrafoOriginal && parrafoOriginal.parentNode) {
            let padre = parrafoOriginal.parentNode;
            padre.removeChild(parrafoOriginal); 

            btnBorrarViejo.disabled = true;
            btnSustituir.disabled = true;
        } else {
            alert("El párrafo inicial ya no existe o ya fue borrado.");
        }
    };

    btnBorrarNuevos.onclick = function() {
        let parrafosNuevos = document.querySelectorAll(".clase-dos");

        for (let p of parrafosNuevos) {
            let padre = p.parentNode;
            padre.removeChild(p); 
        }

        btnBorrarNuevos.disabled = true;
    };

    btnSustituir.onclick = function() {
        if (parrafoOriginal && parrafoOriginal.parentNode) {
            let tabla = document.createElement("table");
            
            // Fila 1
            let tr1 = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.appendChild(document.createTextNode("1"));
            let td2 = document.createElement("td");
            td2.appendChild(document.createTextNode("2"));
            tr1.appendChild(td1);
            tr1.appendChild(td2);

            // Fila 2
            let tr2 = document.createElement("tr");
            let td3 = document.createElement("td");
            td3.appendChild(document.createTextNode("3"));
            let td4 = document.createElement("td");
            td4.appendChild(document.createTextNode("4"));
            tr2.appendChild(td3);
            tr2.appendChild(td4);

            tabla.appendChild(tr1);
            tabla.appendChild(tr2);

            let padre = parrafoOriginal.parentNode;
            padre.replaceChild(tabla, parrafoOriginal);

            btnSustituir.disabled = true;
            btnBorrarViejo.disabled = true;
        } else {
            alert("No se puede sustituir porque el párrafo inicial ya no existe.");
        }
    };
};