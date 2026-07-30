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

    const numeroDestino = "622890435"; // ← CAMBIAR AQUÍ

    const url = `https://wa.me/${numeroDestino}?text=${mensaje}`;
    window.open(url, "_blank");
});

// Contador regresivo
function actualizarContador() {
    const evento = new Date("2026-01-16T17:30:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = evento - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML = "¡Es hoy!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("contador").innerHTML =
        `Faltan ${dias} días, ${horas} horas y ${minutos} min`;
}

setInterval(actualizarContador, 1000);