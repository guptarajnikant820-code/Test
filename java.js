const form = document.getElementById("login-form");
const status = document.getElementById("form-status");

// Change these to your real usernames and passwords.
// Each user has their own dashboard page.
const users = {
  mukul: { password: "mukul67590", page: "dashboard1.html" },
  divit: { password: "divit10856", page: "dashboard2.html" },
  suyash: { password: "suyash01895", page: "dashboard3.html" },
  yatin: { password: "yatin87017", page: "dashboard4.html" },
  anshuman: { password: "anshuman73840", page: "dashboard5.html" },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value;

  if (!username || !password) {
    showStatus("Please enter your username and password.", "error");
    return;
  }

  const user = users[username];

  if (!user || user.password !== password) {
    showStatus("Wrong username or password.", "error");
    return;
  }

  sessionStorage.setItem("username", username);
  window.location.href = user.page;
});

function showStatus(text, type) {
  status.textContent = text;
  status.className = type;
}