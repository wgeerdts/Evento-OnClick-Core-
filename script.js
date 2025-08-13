let botonSesion = document.querySelector(".sesion");

botonSesion.addEventListener("click", function () {
    if (botonSesion.textContent === "Iniciar Sesión") {
        botonSesion.textContent = "Cerrar Sesión";
    } else {
        botonSesion.textContent = "Iniciar Sesión";
    }
});

let botonesLike = document.querySelectorAll(".like");

for (let i = 0; i < botonesLike.length; i++) {
    botonesLike[i].addEventListener("click", function () {
        let textoActual = botonesLike[i].textContent;
        let partes = textoActual.split(" ");
        let numeroLikes = parseInt(partes[0]);
        numeroLikes++;
        botonesLike[i].textContent = numeroLikes + " me gusta";
        let nombreAnimal = botonesLike[i].closest(".card").querySelector("h3").textContent;
        alert(nombreAnimal + " was liked");
    });
}

let botonDefinicion = document.querySelector(".definicion");
botonDefinicion.addEventListener("click", function () {
    botonDefinicion.remove();
});