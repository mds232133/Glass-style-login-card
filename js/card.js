(function () {
  const bootCard = document.getElementById("boot-card");
  const loginCard = document.getElementById("login-card");

  window.portalCard = {
    retreat() {
      bootCard.classList.add("is-retreating");
      window.setTimeout(() => {
        bootCard.hidden = true;
      }, 2600);
    },
    emerge() {
      loginCard.inert = false;
      loginCard.classList.add("is-emerging");
    },
    settle() {
      loginCard.classList.add("is-floating");
    },
    enableControls() {
      loginCard.classList.add("controls-enabled");
      loginCard.querySelectorAll("input, button").forEach((control) => {
        control.disabled = false;
      });
    }
  };
})();
