/*
Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
• El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
• El botón para retroceder hará que se muestre la foto anterior cada vez que se
pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.
*/

window.onload = function () {
  let fotos = [
    "Esperanza_de_Triana_001.jpg",
    "IMG-20240310-WA0000.jpg",
    "procesion-esperanza-triana-R79rsglodiQPbzSd4qrV2ZP-1200x840@diario_abc.webp",
    "be8c9292-d030-442b-ad02-af17b0be3c67_source-aspect-ratio_1600w_0.jpg",
    "213_virgen2-241x300.jpg",
  ];

  let indice = 0;

  let img = document.getElementById("imagen");
  let btnAvanzar = document.getElementById("btnAvanzar");
  let btnRetroceder = document.getElementById("btnRetroceder");

  function ActualizarGaleria() {
    img.src = fotos[indice];

    //B)
    if (indice === 0) {
      btnRetroceder.disabled = true;
    } else {
      btnRetroceder.disabled = false;
    }

    if (indice === fotos.length - 1) {
      btnAvanzar.disabled = true;
    } else {
      btnAvanzar.disabled = false;
    }
  }

  btnAvanzar.onclick = function () {
    if (indice < fotos.length - 1) {
      indice++;
      ActualizarGaleria();
    }
  };

  btnRetroceder.onclick = function () {
    if (indice > 0) {
      indice--;
      ActualizarGaleria();
    }
  };
  ActualizarGaleria();
};
