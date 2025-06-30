function guardarMensaje() {
    const input = document.getElementById("mensajeInput");
    const mensaje = input.value.trim();
    if (mensaje !== "") {
        const mensajes = JSON.parse(localStorage.getItem("mensajes") || "[]");
        mensajes.push(mensaje);
        localStorage.setItem("mensajes", JSON.stringify(mensajes));
        input.value = "";
        mostrarMensajes();
    }
}

function mostrarMensajes() {
    const lista = document.getElementById("mensajesLista");
    lista.innerHTML = "";
    const mensajes = JSON.parse(localStorage.getItem("mensajes") || "[]");
    mensajes.forEach(mensaje => {
        const li = document.createElement("li");
        li.textContent = mensaje;
        lista.appendChild(li);
    });
}

window.onload = mostrarMensajes;

function crearCorazon() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * window.innerWidth + 'px';

    const colores = ['#ff69b4', '#ff4d4d', '#e60073', '#ff1a75'];
    heart.style.background = colores[Math.floor(Math.random() * colores.length)];

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(crearCorazon, 500);

let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSiguienteSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

mostrarSiguienteSlide(); 
setInterval(mostrarSiguienteSlide, 3000); 

document.addEventListener("mousemove", function(e) {
    const heart = document.createElement("div");
    heart.className = "cursor-heart";

    const size = Math.floor(Math.random() * 10) + 8;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.left = (e.pageX - size / 2) + "px";
    heart.style.top = (e.pageY - size / 2) + "px";

    const colores = ['#ff4d6d', '#ff69b4', '#ff1493', '#ff8da1', '#f06292', '#f50057'];
    heart.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    
    heart.dataset.color = heart.style.backgroundColor;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
