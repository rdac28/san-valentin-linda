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
