// INTRO + SONIDO V10
const motorV10 = new Audio('v10.mp3');
motorV10.volume = 1;

const luces = document.querySelectorAll(".luz");
const intro = document.getElementById("intro");
const humo = document.getElementById("humo");

// Intento de autoplay (muchos móviles lo bloquean)
window.addEventListener('load', () => {
    motorV10.play().catch(() => {});
});

// Si falla el autoplay, sonará al primer toque
window.addEventListener('click', () => {
    motorV10.play();
});

// Encendido progresivo de las 5 luces
let i = 0;
const intervaloLuces = setInterval(() => {
    if (i < luces.length) {
        luces[i].classList.add("on");
        i++;
    } else {
        clearInterval(intervaloLuces);

        // Vibración de pantalla + motor en el momento exacto
        intro.classList.add("vibrar");
        motorV10.play();

        // Generar humo
        for (let h = 0; h < 6; h++) {
            const nube = document.createElement("div");
            nube.classList.add("humo-nube");
            nube.style.left = `${50 + h * 40}px`;
            humo.appendChild(nube);
        }

        // Ocultar intro
        setTimeout(() => {
            intro.style.opacity = "0";
            setTimeout(() => {
                intro.style.display = "none";
            }, 800);
        }, 1500);
    }
}, 700);


// Envío por WhatsApp
document.getElementById("despedidaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const asistencia = document.getElementById("asistencia").value;
    let mote = document.getElementById("mote").value;

    if (mote.trim() === "") {
        mote = nombre;
    }

    const mensaje =
        "Formulario Despedida:%0A" +
        "Nombre: " + nombre + "%0A" +
        "Teléfono: " + telefono + "%0A" +
        "¿Vendrá?: " + asistencia + "%0A" +
        "Mote/Obsequio: " + mote;

    const numeroDestino = "622890435";

    const url = `https://wa.me/${numeroDestino}?text=${mensaje}`;

    window.open(url, "_blank");
});


// Contador
function actualizarContador() {
    const evento = new Date("2027-01-16T17:30:00").getTime(); 
    const ahora = new Date().getTime();
    const diferencia = evento - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML = "🔥 ¡Es hoy!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `⏳ ${dias} días, ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();