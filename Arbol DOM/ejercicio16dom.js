/*
Usando las funciones setInterval y clearInterval de Javascript. Coloca
una etiqueta meter, una etiqueta progress y un botón al lado de cada una. Al pulsar el
botón se debe simular la “carga” de la barrita. Muestra un mensaje cuando se alcance el
máximo.
b) Mejora el ejercicio haciendo que cuando pulsemos uno de los botones, este quede
bloqueado hasta que la barra del elemento progress/meter se complete del todo.
*/

window.onload = function(){
    let barraMeter = document.getElementById("meterla");
    let btnDescargar = document.getElementById("btnDescargar");
    let msgMeter = document.getElementById("msgMeter");

    let barraProgress = document.getElementById("progreso");
    let btnCargar = document.getElementById("btnCargar");
    let msgProgress = document.getElementById("msgProgress");

    btnDescargar.onclick = function(){
        btnDescargar.disabled = true;
        msgMeter.innerText = "Dowloading.....";
        barraMeter.value = 0;

        let timerMeter = setInterval(function(){
            barraMeter.value += 5;

            if(barraMeter.value >= 100){
                clearInterval(timerMeter);
                msgMeter.innerText = "Descargadito listo para usar nene";
                btnDescargar.disabled = false;
            }
        }, 100);
    };

    btnCargar.onclick = function(){
        btnCargar.disabled = true;
        msgProgress.innerText = "Cagando digo cargandou.....";
        barraProgress.value = 0;

        let timerProgress = setInterval(function(){
            barraProgress.value += 5;

            if(barraProgress.value >= 100){
                clearInterval(timerProgress);
                msgProgress.innerText = "Descargadito listo para usar nene";
                btnCargar.disabled = false;
            }
        }, 100);
    };
};