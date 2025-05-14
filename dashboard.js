const username = localStorage.getItem("loggedInUser");
const users = JSON.parse(localStorage.getItem("users") || "{}");

if (!username || !users[username]) {
  window.location.href = "index.html";
}

document.getElementById("usernameDisplay").textContent = username;
document.getElementById("balanceDisplay").textContent = users[username].balance;
document.getElementById("ibanDisplay").textContent = users[username].iban;
