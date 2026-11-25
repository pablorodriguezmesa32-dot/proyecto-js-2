/*
Apartado A: USANDO solo JS, inicializa los elementos al cargar la página:

* btn-volumen debe estar con la clase active y highlighted.
* btn-ecualizador debe tener solo la clase inactive.
* El checkbox chk-mute debe mantener su clase actual (no la toques).


Apartado B: Comportamiento de los botones:

* Al hacer click en #btn-volumen:
    - Añade active y highlighted al boton.
    - Si el usuario hace click una segunda vez, quita ambas clases.

* Al hacer click en #btn-ecualizador:
    - Si el volumen no está activo (sin clase active), añade la clase active al
      ecualizador y quita la clase inactive.
    - Si el volumen sí está activo, no hagas nada. Muestra un alert("No puedes
      activar el ecualizador mientras suena la pista.").


Apartado C: Comportamiento del checkbox:

* Cuando se desmarque el checkbox, añade la clase disabled a ambos botones.
* Cuando se marque el checkbox, quita la clase disabled de los botones.

checkbox.checked = T o F
*/

window.onload = function(){

    //APARTADO A
    let dedo1 = document.getElementById("btn-volumen");
    let dedo2 = document.getElementById("btn-ecualizador");
    let dedo3 = document.getElementById("chk-mute");

    dedo1.classList.add("active");
    dedo1.classList.add("highlighted");

    dedo2.className = "inactive";

    //APARTADO B
    dedo1.onclick = function(){
        dedo1.classList.toggle("active");
        dedo1.classList.toggle("highlighted");
    }

    dedo2.onclick = function(){
        if(!dedo1.classList.contains("active")){
            dedo2.classList.add("active");
            dedo2.classList.remove("inactive");
        }else{
            alert("Ella jura que va a activar el ecualizador")
        }
    }

    //APARTADO C
    dedo3.onchange = function(){
        if(dedo3.checked == false){
            dedo1.classList.add("disabled");
            dedo2.classList.add("disabled");
        }else{
            dedo1.classList.remove("disabled");
            dedo2.classList.remove("disabled");
        }
    }
}