(function () {
  const scene = document.querySelector(".scene");
  const tunnel = document.getElementById("tunnel");
  let pointerFrame = 0;

  window.addEventListener("pointermove", (event) => {
    if (pointerFrame) {
      return;
    }
    pointerFrame = window.requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      tunnel.style.setProperty("--pointer-x", `${x.toFixed(2)}deg`);
      tunnel.style.setProperty("--pointer-y", `${y.toFixed(2)}deg`);
      scene.style.setProperty("--pointer-glow-x", `${50 + x * 3}%`);
      scene.style.setProperty("--pointer-glow-y", `${45 + y * 3}%`);
      pointerFrame = 0;
    });
  }, { passive: true });
})();
