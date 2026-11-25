/*
Desarrolla una pequeña aplicación que permita personalizar una tarjeta de perfil de
usuario.
La tarjeta se compone de una imagen, un nombre, una descripción y varios botones para
modificar su apariencia.
HTML inicial:
<div id="perfil">
<img id="avatar" src="avatar1.jpg" alt="Avatar">
<h2 id="nombre">Ana García</h2>
<p id="descripcion">Estudiante de DAW</p>
</div>
<button id="cambiarFoto">Cambiar fotografía</button>
<button id="cambiarNombre">Cambiar nombre</button>
<button id="cambiarColor">Cambiar color</button>
<button id="ocultar">Ocultar descripción</button>

Funcionalidades:
1. Al pulsar «Cambiar fotografía», solicita la ruta de la nueva imagen usando
prompt() y modifica el atributo src de la imagen. Modifica también el
atributo alt
2. Al pulsar «Cambiar nombre», solicitar un nombre mediante prompt() y
modificar el contenido del encabezado.
3. Al pulsar «Cambiar color», cambiar el color de fondo de la tarjeta.
4. Al pulsar «Ocultar descripción», ocultar el párrafo.
5. Añadir un nuevo botón que permita volver a mostrar la descripción.
*/

window.onload = function(){

    let avatar = document.querySelector("#avatar");
    let nombre = document.querySelector("#nombre");
    let perfil = document.querySelector("#perfil");
    let descripcion = document.querySelector("#descripcion");

    let btnFoto = document.querySelector("#cambiarFoto");
    btnFoto.onclick = function(){
        let nuevaRuta = prompt("Introduce la ruta de la nueva imagen:");
        if(nuevaRuta){
            avatar.setAttribute("src", nuevaRuta);
            avatar.setAttribute("alt", nuevaRuta);
        }
    };

    let btnNombre = document.querySelector("#cambiarNombre");
    btnNombre.onclick = function(){
        let nuevoNombre = prompt("Introduce el nuevo nombre:");
        if(nuevoNombre){
            nombre.textContent = nuevoNombre;
        }
    };

    let btnColor = document.querySelector("#cambiarColor");
    btnColor.onclick = function(){
        let nuevoColor = prompt("Introduce el nuevo color de fondo:");
        if(nuevoColor){
            perfil.style.backgroundColor = nuevoColor;
        }
    };

    let btnOcultar = document.querySelector("#ocultar");
    btnOcultar.onclick = function(){
        avatar.style.setProperty("display", "none");
    };

    let nuevoBoton = document.createElement("button");
    nuevoBoton.setAttribute("id", "mostrar");
    let textoBoton = document.createTextNode("Mostrar descripcion");
    nuevoBoton.appendChild(textoBoton);
    document.body.appendChild(nuevoBoton);

    nuevoBoton.onclick = function(){
        description.style.setProperty("display", "block");
    };
};