// Kullanıcı verileri
let users = JSON.parse(localStorage.getItem('hlbank_users')) || [
    {
        id: 1,
        email: "test@example.com",
        password: "123456",
        name: "Demo Kullanıcı",
        balance: 10000
    }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if(user) {
        localStorage.setItem('hlbank_currentUser', JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        alert("Giriş bilgileri hatalı!");
    }
});
