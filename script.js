document.addEventListener("DOMContentLoaded", () => {

  // TEXTO ESCRITO
  const text = [
    "Desde que llegaste a mi vida, todo es más bonito.",
    "",
    "Linda Antonella Rodriguez Corcuera...",
    "¿Quieres ser mi San Valentín? 💖"
  ];

  let line = 0;
  let char = 0;
  const textEl = document.getElementById("text");

  function typeEffect() {
    if (line < text.length) {
      if (char < text[line].length) {
        textEl.innerHTML += text[line].charAt(char);
        char++;
        setTimeout(typeEffect, 50);
      } else {
        textEl.innerHTML += "<br><br>";
        line++;
        char = 0;
        setTimeout(typeEffect, 400);
      }
    }
  }
  typeEffect();

  // BOTONES SÍ / NO
  window.yes = function () {
    document.querySelector(".card").innerHTML = `
      <h1>💖 Sabía que dirías que sí 💖</h1>
      <p>
        Gracias por existir, Linda Antonella.<br><br>
        Tienes una cita conmigo este sabado, estas cordialmente invitada.<br><br>
        Prometo hacerte sonreír todos los días.
      </p>
    `;
  };

  window.moveNo = function () {
    const noBtn = document.getElementById("no");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  };

  // CONTADOR
  const fechaInicio = new Date(2022, 11, 4);
  const tiempoSpan = document.getElementById("tiempo");

  function actualizarContador() {
    const ahora = new Date();
    const diff = ahora - fechaInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    tiempoSpan.innerText = `${dias} días, ${horas} horas y ${minutos} minutos`;
  }
  actualizarContador();
  setInterval(actualizarContador, 60000);

  // CORAZONES
  function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerText = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), 6000);
  }
  setInterval(crearCorazon, 1500);

// MODAL POR QUÉ TE AMO (CON ANIMACIÓN)
const whyLoveBtn = document.getElementById("whyLoveBtn");
const loveModal = document.getElementById("loveModal");
const closeModal = document.getElementById("closeModal");
const listItems = document.querySelectorAll(".modal-content ol li");

// Creamos la firma dinámicamente si no existe
const modalContent = document.querySelector(".modal-content");
if (!document.querySelector(".firma")) {
    const firma = document.createElement("p");
    firma.className = "firma";
    firma.innerHTML = "Y podría seguir… pero mejor te lo demuestro en persona ❤️<br>— Renzo";
    modalContent.appendChild(firma);
}

whyLoveBtn.addEventListener("click", () => {
    loveModal.classList.remove("hidden");
    
    // Animación de aparición uno por uno
    listItems.forEach((li, index) => {
        setTimeout(() => {
            li.classList.add("show");
        }, index * 400); // Aparece uno cada 0.4 segundos
    });

    // Aparece la firma al final
    setTimeout(() => {
        document.querySelector(".firma").classList.add("show");
    }, listItems.length * 400 + 500);

    // PASO 3: Vibración sutil (si el móvil lo permite)
    if (navigator.vibrate) {
        navigator.vibrate(50); 
    }
});

// Resetear animación al cerrar (para que vuelva a ocurrir si lo abre otra vez)
closeModal.addEventListener("click", () => {
    loveModal.classList.add("hidden");
    listItems.forEach(li => li.classList.remove("show"));
    document.querySelector(".firma").classList.remove("show");
});

  // MÚSICA
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");

  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = "⏸️ Pausar música";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "💖 Toca aquí";
    }
  });

});




// CONFIGURACIÓN DE LAS 3 FOTOS DE PRUEBA
const fotos = [
    { src: "foto1.jpg", caption: "Nuestro primer san valentin aquí empezó todo... 💖" },
    { src: "foto2.jpg", caption: "Nuestra primera foto hotttt🥵" },
    { src: "foto3.jpg", caption: "Nuestras primeras muestras de afecto y amor✨" },
    { src: "foto4.jpg", caption: "Los primeros pequeños grandes detalles🤍" },
    { src: "foto5.jpg", caption: "Una de nuestros tantos viajes yendonos a la mie..🫵" },
    { src: "foto6.jpg", caption: "Una de nuestras visitas a contemplar la playa y sentir esa paz a tu lado❤️‍🩹" },
    { src: "foto7.jpg", caption: "Una de nuestras formas de decirnos ´te extraño´ estando molestos🥹" },
    { src: "foto8.jpg", caption: "Una de tus tantas dormas de decirme que me amas🤎" },
    { src: "foto9.jpg", caption: "Las primeras pruebas del delito de nuestras travesuras🙇‍♂️" },
    { src: "foto10.jpg", caption: "Una de las tantas fotos random que para ti son horribles pero a mi me fascinan😍" },
    { src: "foto11.jpg", caption: "Una de las pocas veces que la camara hace justicia a como te veo con mis propios ojos literalmente PERFECTA💯" },
    { src: "foto12.jpg", caption: "Una de las muestras de decrite que te presto atención aún con mi mala memoria." },
    { src: "foto13.jpg", caption: "Y la culminación de esto, pero en foto el comienzo de una gran historia, en donde el chico de la foto no dejó de amar cada dia más y más a aquella chica que sin saberlo se convertiría en todo para él." }   

];

let indiceFoto = 0;

const trunkModal = document.getElementById("trunkModal");
const openTrunkBtn = document.getElementById("openTrunkBtn");
const closeTrunk = document.getElementById("closeTrunk");
const carouselImg = document.getElementById("carouselImg");
const photoCaption = document.getElementById("photoCaption");

// Abrir el baúl
openTrunkBtn.addEventListener("click", () => {
    trunkModal.classList.remove("hidden");
    actualizarFoto();
});

// Cerrar el baúl
closeTrunk.addEventListener("click", () => {
    trunkModal.classList.add("hidden");
});

// Función para cambiar fotos
window.changePhoto = function(paso) {
    indiceFoto += paso;
    if (indiceFoto < 0) indiceFoto = fotos.length - 1;
    if (indiceFoto >= fotos.length) indiceFoto = 0;
    actualizarFoto();
};

function actualizarFoto() {
    carouselImg.style.opacity = 0;
    setTimeout(() => {
        carouselImg.src = fotos[indiceFoto].src;
        photoCaption.innerText = fotos[indiceFoto].caption;
        carouselImg.style.opacity = 1;
    }, 200);
}


function verificarFecha() {
    const fechaInput = document.getElementById("fechaClave").value;
    const errorMsg = document.getElementById("error-msg");
    const loginScreen = document.getElementById("login-screen");

    // La fecha correcta es 4 de diciembre de 2022
    // El formato del input date es YYYY-MM-DD
    if (fechaInput === "2022-11-04") {
        loginScreen.classList.add("fade-out");
        // Opcional: Iniciar la música automáticamente al entrar
        const bgMusic = document.getElementById("bgMusic");
        if (bgMusic) bgMusic.play(); 
    } else {
        errorMsg.classList.remove("hidden");
        // Pequeña vibración de error
        if (navigator.vibrate) navigator.vibrate(200);
    }
}


