const text = [
    "Desde que llegaste a mi vida, todo es más bonito.",
    "",
    "Linda Antonella Rodriguez Corcuera...",
    "¿Quieres ser mi San Valentín? 💖"
];

let line = 0;
let char = 0;

function typeEffect() {
    if (line < text.length) {
        if (char < text[line].length) {
            document.getElementById("text").innerHTML += text[line].charAt(char);
            char++;
            setTimeout(typeEffect, 50);
        } else {
            document.getElementById("text").innerHTML += "<br><br>";
            line++;
            char = 0;
            setTimeout(typeEffect, 400);
        }
    }
}

typeEffect();

function yes() {
    document.querySelector(".card").innerHTML = `
        <h1>💖 Sabía que dirías que sí 💖</h1>
        <p>
            Gracias por existir, Linda Antonella.<br><br>
            Prometo hacerte sonreír todos los días.
        </p>
    `;
}

function moveNo() {
    const noBtn = document.getElementById("no");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}



const fechaInicio = new Date(2022, 11, 04); // AÑO, MES-1, DÍA
const tiempoSpan = document.getElementById("tiempo");

function actualizarContador() {
  const ahora = new Date();

  let diferencia = ahora.getTime() - fechaInicio.getTime();

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  tiempoSpan.innerText = `${dias} días, ${horas} horas y ${minutos} minutos`;
}

actualizarContador();
setInterval(actualizarContador, 60000);




function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.innerText = "💖";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 8 + 14 + "px";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

setInterval(crearCorazon, 1500);



document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");

  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = "⏸️ Pausar música";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "🎵 Reproducir música";
    }
  });
});
