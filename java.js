const form = document.getElementById("login-form");
const status = document.getElementById("form-status");

// Change these to your real usernames and passwords.
// Each user has their own dashboard page.
const users = {
  user1: { password: "pass1", page: "dashboard1.html" },
  user2: { password: "pass2", page: "dashboard2.html" },
  user3: { password: "pass3", page: "dashboard3.html" },
  user4: { password: "pass4", page: "dashboard4.html" },
  user5: { password: "pass5", page: "dashboard5.html" },
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