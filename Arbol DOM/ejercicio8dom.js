/*
Implementa el efecto ROLLOVER sobre una imagen: al pasar el ratón por encima,
cambia la imagen. Al sacar el cursor fuera, la imagen vuelve a su estado original.
*/
window.onload = function(){

}

function cambiarImagen(){
    let imagen = document.getElementById("myImage");
    imagen.setAttribute("src", "reinaa2.webp");
}

function restaurarImagen(){
    let imagen = document.getElementById("myImage");
    imagen.setAttribute("src", "reinaa1.jpeg");
}
