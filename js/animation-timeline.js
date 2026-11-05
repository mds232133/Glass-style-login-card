(function () {
  const scene = document.querySelector(".scene");
  const tunnel = document.getElementById("tunnel");
  const typedCode = document.getElementById("typed-code");
  const status = document.getElementById("animation-status");
  const code = "const portal = await connect();\nif (portal.ready) {\n  const user = await login();\n  console.log(\"Welcome, user\");\n}";
  const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));
  const items = (selector) => [...document.querySelectorAll(selector)];

  async function typeBootCode() {
    const interval = 28;
    for (const character of code) {
      typedCode.textContent += character;
      await wait(interval);
    }
  }

  async function launchTimeline() {
    await typeBootCode();
    status.textContent = "Portal activating";
    scene.classList.add("is-activating");
    tunnel.classList.add("is-active");
    await wait(200);
    scene.classList.add("is-active");

    window.portalCard.retreat();
    await wait(1000);
    window.portalCard.emerge();
    status.textContent = "Login form emerging";
    await wait(1100);

    const sequence = [
      ".profile-orbit",
      ".login-title",
      ".title-underline",
      '[data-stage="username"]',
      '[data-stage="password"]',
      '[data-stage="remember"]',
      '[data-stage="forgot"]',
      '[data-stage="button"]',
      '[data-stage="social-caption"]',
      '[data-stage="google"]',
      '[data-stage="github"]',
      '[data-stage="facebook"]'
    ];

    for (const selector of sequence) {
      for (const item of items(selector)) {
        item.classList.add("is-arrived");
        await wait(15);
      }
    }

    await wait(30);
    window.portalCard.enableControls();
    window.portalCard.settle();
    status.textContent = "Login form ready";
    document.getElementById("username").focus({ preventScroll: true });
  }

  launchTimeline();
})();
