

document.addEventListener("mousemove", function(e) {

   const sparkle = document.createElement("span");

sparkle.innerHTML = "✦";

    sparkle.classList.add("cursor-sparkle");

    // Posición donde está el mouse
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    // Tamaño aleatorio
    const size = Math.random() * 5 + 3;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    // Rotación aleatoria
    sparkle.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(sparkle);

    // Lo eliminamos después de la animación
    setTimeout(() => {
        sparkle.remove();
    }, 700);

});
