// Each dashboard page sets data-user on <body> to the username allowed to see it.
const allowedUser = document.body.dataset.user;
const username = sessionStorage.getItem("username");

// Send people back to the login page if this isn't their dashboard.
if (username !== allowedUser) {
  window.location.href = "index.html";
}

document.getElementById("welcome").textContent = "Welcome, " + username + ".";

document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("username");
  window.location.href = "index.html";
});