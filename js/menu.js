if (shouldPlay === 'true') {
  const audio = document.createElement('audio');
  audio.id = 'bgMusic';
  audio.src = 'music/Merry Christmas Mr. Lawrence.mp3';
  audio.loop = true;
  document.body.appendChild(audio);

  audio.volume = 0;
  audio.play().then(() => {
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  }).catch((err) => {
    console.log("Autoplay blocked:", err);
  });
}
