const form = document.getElementById("login-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value;

  if (!username || !password) {
    showStatus("Please enter your username and password.", "error");
    return;
  }

  // Replace this with a real request (e.g. fetch) when you have a backend.
  // Never log or store passwords in plain text.
  console.log({ username });
  showStatus("Logged in.", "success");
  form.reset();
});

function showStatus(text, type) {
  status.textContent = text;
  status.className = type;
}