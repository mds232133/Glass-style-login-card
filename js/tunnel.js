(function () {
  const particleHost = document.getElementById("ambient-particles");
  const starsHost = document.getElementById("tunnel-stars");
  const particleCount = window.matchMedia("(max-width: 700px)").matches ? 24 : 42;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    const size = (Math.random() * 2 + 1).toFixed(1);
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.setProperty("--particle-size", `${size}px`);
    particle.style.setProperty("--particle-time", `${(Math.random() * 4 + 4).toFixed(2)}s`);
    particle.style.setProperty("--particle-delay", `${(Math.random() * -8).toFixed(2)}s`);
    particle.style.setProperty("--particle-drift", `${(Math.random() * 56 - 28).toFixed(0)}px`);
    particleHost.appendChild(particle);
  }

  for (let index = 0; index < 18; index += 1) {
    const star = document.createElement("i");
    star.className = "star-point";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--twinkle-delay", `${(Math.random() * 4).toFixed(2)}s`);
    starsHost.appendChild(star);
  }
})();
