document.getElementById("enterBtn").addEventListener("click", function () {
  const overlay = document.getElementById("introOverlay");
  const music = document.getElementById("bgMusic");

  overlay.classList.add("fade-out");

  // Smooth fade-in to 40% volume
  music.volume = 0;
  music.play().then(() => {
    let vol = 0;
    const targetVolume = 0.4;
    const fadeIn = setInterval(() => {
      if (vol < targetVolume) {
        vol += 0.05;
        music.volume = Math.min(vol, targetVolume);
      } else {
        clearInterval(fadeIn);
      }
    }, 50);
  }).catch(err => {
    console.log("Autoplay blocked:", err);
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    const music = document.getElementById("bgMusic");
    let vol = music.volume;

    const fadeOut = setInterval(() => {
    if (vol > 0) {
        vol -= 0.05;
        music.volume = Math.max(vol, 0);
    } else {
        clearInterval(fadeOut);
        window.location.href = this.dataset.href;
    }
    }, 100);
});
});