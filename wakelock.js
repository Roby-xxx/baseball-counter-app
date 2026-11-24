document.addEventListener('DOMContentLoaded', () => {
  // Crea il  LED in alto a destra su tutte le pagine
  const statusDiv = document.createElement('div');
  statusDiv.id = 'wakelock-status';
  const dot = document.createElement('span');
  dot.id = 'wakelock-dot';
  statusDiv.appendChild(dot);
  document.body.appendChild(statusDiv);

  let wakeLock = null;
  const toggle = document.getElementById('toggle-wakelock');

  // Legge la preferenza salvata (se non esiste, default = 'true')
  function isWakeLockEnabled() {
    const saved = localStorage.getItem('keepScreenOn');
    return saved === null ? true : saved === 'true';
  }

  // Attiva lo Stay awake
  async function attivaSchermoAcceso() {
    if (!isWakeLockEnabled()) return; // Se disattivato dall'utente, non fa nulla

    if ('wakeLock' in navigator) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        dot.classList.add('active');

        wakeLock.addEventListener('release', () => {
          dot.classList.remove('active');
        });
      } catch (err) {
        dot.classList.remove('active');
      }
    }
  }

  // Disattiva lo Stay awake
  async function disattivaSchermoAcceso() {
    if (wakeLock) {
      await wakeLock.release();
      wakeLock = null;
    }
    dot.classList.remove('active');
  }

  // Se siamo su index.html (dove c'è il toggle), sincronizza lo stato e ascolta i cambi
  if (toggle) {
    toggle.checked = isWakeLockEnabled();

    toggle.addEventListener('change', (e) => {
      const attivo = e.target.checked;
      localStorage.setItem('keepScreenOn', attivo);

      if (attivo) {
        attivaSchermoAcceso();
      } else {
        disattivaSchermoAcceso();
      }
    });
  }

  // Avvia al caricamento della pagina (se abilitato)
  if (isWakeLockEnabled()) {
    attivaSchermoAcceso();
  }

  // Riattiva quando si torna sull'app
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && isWakeLockEnabled()) {
      attivaSchermoAcceso();
    }
  });

  // Fallback al primo tocco (utile su iOS)
  document.addEventListener('click', () => {
    if (isWakeLockEnabled() && (!wakeLock || wakeLock.released)) {
      attivaSchermoAcceso();
    }
  }, { once: true });
});
