// =========================
// CONFIGURA AQUÍ LA FECHA
// =========================
// Formato: "YYYY-MM-DDTHH:MM:SS"
const EVENT_DATE_STRING = "2026-01-31T21:00:00"; // cámbialo por la fecha real

// =========================
// RELOJ REGRESIVO
// =========================
const countdownContainer = document.getElementById("countdown");
const msgEl = document.getElementById("countdownMsg");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const eventTime = new Date(EVENT_DATE_STRING).getTime();
  const diff = eventTime - now;

  if (diff <= 0) {
    // Ya empezó la fiesta
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    msgEl.textContent = "¡La fiesta ya empezó, no llegues tarde!";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const hoursLeft = hours % 24;
  const minutesLeft = minutes % 60;
  const secondsLeft = seconds % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hoursLeft).padStart(2, "0");
  minutesEl.textContent = String(minutesLeft).padStart(2, "0");
  secondsEl.textContent = String(secondsLeft).padStart(2, "0");
}

// Actualiza cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// =========================
// CONTROL DE SONIDO INTRO
// =========================
const introVideo = document.getElementById("introVideo");
const soundToggle = document.getElementById("soundToggle");

if (introVideo && soundToggle) {
  // Aseguramos que arranque en silencio
  introVideo.muted = true;

  const activarSonido = () => {
    introVideo.muted = false;
    introVideo.volume = 1; // volumen al máximo
    introVideo.play().catch(() => {
      // iOS a veces bloquea, ignoramos el error silenciosamente
    });
    soundToggle.textContent = "🔊";
  };

  const silenciar = () => {
    introVideo.muted = true;
    soundToggle.textContent = "🔇";
  };

  soundToggle.addEventListener("click", () => {
    if (introVideo.muted) {
      activarSonido(); // 🔇 → 🔊
    } else {
      silenciar(); // 🔊 → 🔇
    }
  });
}
