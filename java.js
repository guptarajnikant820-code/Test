const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showStatus("Please fill in every field.", "error");
    return;
  }

  if (!form.email.checkValidity()) {
    showStatus("Enter a valid email address.", "error");
    return;
  }

  // Replace this with a real request (e.g. fetch) when you have a backend.
  console.log({ name, email, message });
  showStatus("Thanks, your message was sent.", "success");
  form.reset();
});

function showStatus(text, type) {
  status.textContent = text;
  status.className = type;
}