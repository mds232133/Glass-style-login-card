(function () {
  const form = document.getElementById("login-form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const toggle = document.getElementById("visibility-toggle");
  const message = document.getElementById("form-message");
  const forgotLink = document.getElementById("forgot-link");

  toggle.addEventListener("click", () => {
    const showing = password.type === "password";
    password.type = showing ? "text" : "password";
    toggle.setAttribute("aria-label", showing ? "Hide password" : "Show password");
    toggle.setAttribute("aria-pressed", String(showing));
  });

  forgotLink.addEventListener("click", (event) => {
    event.preventDefault();
    message.textContent = username.value.trim()
      ? `Password reset instructions are not available for ${username.value.trim()} in this demo.`
      : "Enter your username to continue with password recovery.";
    username.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const missingUsername = !username.value.trim();
    const missingPassword = !password.value;
    if (missingUsername || missingPassword) {
      message.textContent = missingUsername && missingPassword
        ? "Please enter your username and password."
        : missingUsername
          ? "Please enter your username."
          : "Please enter your password.";
      (missingUsername ? username : password).focus();
      return;
    }

    message.textContent = "Demo only — no authentication service is connected.";
  });

  form.addEventListener("input", () => {
    message.textContent = "";
  });
})();
