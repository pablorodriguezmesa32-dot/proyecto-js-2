window.onload = function(){
    let botonBorrar = document.getElementById("btn-borrar-todo");

    botonBorrar.onclick = function(){
        let articulos = document.querySelectorAll("article");

        if(articulos.length === 0){
            console.log("El jura que hay articulos que borrar");
            return;
        }

        for(let articulo of articulos){
            let papixulo = articulo.parentNode;
            papixulo.removeChild(articulo);
        }
    };
};