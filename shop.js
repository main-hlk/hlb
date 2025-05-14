const username = localStorage.getItem("loggedInUser");
const users = JSON.parse(localStorage.getItem("users") || "{}");

if (!username || !users[username]) {
  window.location.href = "index.html";
}

const productList = document.getElementById("productList");

const products = [
  { name: "Tezgah Stars Ön Bilet", price: 1000 },
  { name: "Oyun Rezervasyonu", price: 45 },
  { name: "HLgame", price: 100 }
];

products.forEach(product => {
  const li = document.createElement("li");
  li.textContent = product.name + " - " + product.price + " HL";
  const btn = document.createElement("button");
  btn.textContent = "Satın Al";
  btn.onclick = () => {
    if (users[username].balance >= product.price) {
      users[username].balance -= product.price;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Satın alındı: " + product.name);
      
      // E-posta bildirimi için webhook kullanılabilir (dummy)
      fetch("https://formspree.io/f/xgegrkzn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          message: username + " kullanıcısı " + product.name + " ürününü satın aldı."
        })
      });
    } else {
      alert("Yetersiz bakiye.");
    }
  };
  li.appendChild(btn);
  productList.appendChild(li);
});
