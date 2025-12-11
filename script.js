// =========================
// CONFIGURA AQUÍ LA FECHA
// =========================
// Formato: "YYYY-MM-DDTHH:MM:SS"
const EVENT_DATE_STRING = "2026-04-11T21:00:00"; // cámbialo por la fecha real

// =========================
// RELOJ REGRESIVO
// =========================
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

updateCountdown();
setInterval(updateCountdown, 1000);

// OPCIONAL: por si en el futuro usas un <button> en lugar de <a>
const btnMapa = document.getElementById("btnMapa");
if (btnMapa) {
  btnMapa.addEventListener("click", () => {
    // Si quitas el href del <a>, esto mantiene la funcionalidad.
    window.open(
      "https://www.google.com/maps/@20.934224,-89.5683757,3a,90y,115.7h,66.33t/data=!3m7!1e1!3m5!1sxfxPQWvOL-qJA2C0d0ZZGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D23.672873999999993%26panoid%3DxfxPQWvOL-qJA2C0d0ZZGA%26yaw%3D115.699295!7i16384!8i8192",
      "_blank"
    );
  });
}
