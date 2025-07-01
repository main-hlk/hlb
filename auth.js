document.addEventListener('DOMContentLoaded', function() {
    // Modal işlemleri
    document.getElementById('loginBtn').addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'flex';
    });

    document.getElementById('registerBtn').addEventListener('click', () => {
        document.getElementById('registerModal').style.display = 'flex';
    });

    // Giriş formu
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const user = users.find(u => u.email === email && u.password === password);
        
        if(user) {
            localStorage.setItem('hlbank_currentUser', JSON.stringify(user));
            window.location.href = "dashboard.html";
        } else {
            alert('Geçersiz e-posta veya şifre!');
        }
    });

    // Kayıt formu
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        
        if(users.some(u => u.email === email)) {
            alert('Bu e-posta zaten kullanılıyor!');
            return;
        }
        
        const newUser = {
            id: Date.now().toString(),
            name: document.getElementById('registerName').value,
            email: email,
            phone: document.getElementById('registerPhone').value,
            password: document.getElementById('registerPassword').value,
            balance: 1000,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('hlbank_users', JSON.stringify(users));
        localStorage.setItem('hlbank_currentUser', JSON.stringify(newUser));
        
        // Hoş geldin bonusu
        transactions.push({
            id: Date.now().toString(),
            userId: newUser.id,
            description: 'Hoş geldiniz bonusu',
            amount: 1000,
            balance: 1000,
            date: new Date().toISOString()
        });
        localStorage.setItem('hlbank_transactions', JSON.stringify(transactions));
        
        window.location.href = "dashboard.html";
    });
});
