nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cuántos años tienes?");
ciudad = prompt("¿En qué ciudad vives?");

document.getElementById("mensaje1").innerHTML += `<p>¡Bienvenido, ${nombre}! Tienes ${edad} años y vives en ${ciudad}.</p>`;

let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD)");
let fechaNacimientoDate = new Date(fechaNacimiento);
let hoy = new Date();
let diferenciaTiempo = hoy - fechaNacimientoDate;
let diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

document.getElementById("mensaje2").innerHTML += `<p>Has vivido aproximadamente ${diasVividos} días.</p>`;