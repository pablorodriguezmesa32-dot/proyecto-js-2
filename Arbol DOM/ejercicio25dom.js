/*
Crea una lista (<ul>) con varios 7 elementos (<li>) representando tareas
pendientes. Maquetala para que parezca una lista de tareas de una aplicación (pej,
alternando para cada elemento el color de fondo y el color del texto blanco y verde).
Añade varios botones debajo de la lista para hacer un gestor de tareas:
• Añadir Tarea al Inicio: pide el nombre de la tarea usando prompt y la
añade al inicio de la lista (debe quedar maquetada).
• Añadir Tarea al Final: igual que el botón anterior pero añade la nueva
tarea al final de la lista (debe quedar maquetada).
• Eliminar Ultima Tarea: Cuando el usuario pulse el botón, debe
eliminarse el último elemento de la lista.
• Eliminar Primera Tarea: Igual que el anterior pero ahora se elimina la
primera tarea de la lista.
IMPORTANTE: Si ya no hay elementos, debe mostrarse un mensaje por consola
indicando que la lista está vacía
*/

window.onload = function(){
    let lista = document.querySelector("#listaTareas");
    let btnInicio = document.querySelector("#btnInicio");
    let btnFinal = document.querySelector("#btnFinal");
    let btnEliminarUltima = document.querySelector("#btnEliminarUltima");
    let btnEliminarPrimera = document.querySelector("#btnEliminarPrimera");

    btnInicio.onclick = function(){
        let textoTarea = prompt("Introduce el nombre de la nueva tarea: ");

        if(textoTarea){
            let nuevaLi = document.createElement("li");
            let texto = document.createTextNode(textoTarea);
            nuevaLi.appendChild(texto);

            if(lista.firstElementChild){
                lista.insertBefore(nuevaLi, lista.firstElementChild);
            }else {
                lista.appendChild(nuevaLi);
            }
        }
    };

    btnFinal.onclick = function(){
        let textoTarea = prompt("Introduce el nombre de la nueva tarea: ");

        if(textoTarea){
            let nuevaLi = document.createElement("li");
            let texto = document.createTextNode(textoTarea);
            nuevaLi.appendChild(texto);

            lista.appendChild(nuevaLi);
        }
    };

    btnEliminarUltima.onclick = function(){
        if(lista.lastElementChild){
            lista.removeChild(lista.lastElementChild);
        }else{
            console.log("La lista esta vacia");
        }
    };

    btnEliminarPrimera.onclick = function(){
        if(lista.firstElementChild){
            lista.removeChild(lista.firstElementChild);
        }else{
            console.log("La lista esta vacia");
        }
    };
};