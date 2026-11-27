const form = document.getElementById("user-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value;

  if (!username || !password) {
    showStatus("Please enter a username and password.", "error");
    return;
  }

  if (password.length < 8) {
    showStatus("Password must be at least 8 characters.", "error");
    return;
  }

  // Replace this with a real request (e.g. fetch) when you have a backend.
  // Never log or store passwords in plain text.
  console.log({ username });
  showStatus("Submitted.", "success");
  form.reset();
});

function showStatus(text, type) {
  status.textContent = text;
  status.className = type;
}