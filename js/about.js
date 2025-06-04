if (shouldPlay === 'true') {
  const audio = document.createElement('audio');
  audio.id = 'bgMusic';
  audio.src = 'music/Swan Serenade - Piano House.mp3';
  audio.loop = true;
  document.body.appendChild(audio);

  audio.volume = 0;
  audio.play().then(() => {
    let vol = 0;
    const targetVolume = 0.4; // ✅ final volume (e.g. 40%)
    const fadeIn = setInterval(() => {
      if (vol < targetVolume) {
        vol += 0.05;
        audio.volume = Math.min(vol, targetVolume);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch((err) => {
    console.log("Autoplay blocked:", err);
  });
}
