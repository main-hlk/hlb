document.getElementById("cardForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value.trim();
  const cvc = document.getElementById("cardCVC").value.trim();

  const validCards = [
    { cardNumber: "1234567812345678", cvc: "123", balance: 1000 },
    { cardNumber: "1111222233334444", cvc: "999", balance: 500 },
    { cardNumber: "0000111122223333", cvc: "321", balance: 250 }
  ];

  const found = validCards.find(c => c.cardNumber === cardNumber && c.cvc === cvc);
  if (!found) {
    alert("Geçersiz kart bilgileri.");
    return;
  }

  // Mevcut kartları al
  const existing = JSON.parse(localStorage.getItem("userCards")) || [];

  // Aynı kart zaten eklenmiş mi?
  const alreadyAdded = existing.find(c => c.cardNumber === cardNumber);
  if (alreadyAdded) {
    alert("Bu kart zaten eklenmiş.");
    return;
  }

  // Kartı ekle
  existing.push(found);
  localStorage.setItem("userCards", JSON.stringify(existing));

  alert("Kart başarıyla eklendi!");
  document.getElementById("cardForm").reset();
});
