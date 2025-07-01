document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('hlbank_currentUser'));
    
    if(!currentUser) {
        window.location.href = "index.html";
        return;
    }

    // Kullanıcı bilgilerini yükle
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userBalance').textContent = currentUser.balance;
    
    // Kart ekleme işlemi
    document.getElementById('addCardBtn').addEventListener('click', () => {
        document.getElementById('addCardModal').style.display = 'flex';
    });

    // Çıkış işlemi
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('hlbank_currentUser');
        window.location.href = "index.html";
    });

    // Diğer tüm orjinal fonksiyonlar...
    function renderUserCards() {
        // Orjinal kodun aynısı
    }
    
    function renderTransactions() {
        // Orjinal kodun aynısı
    }
    
    // Sayfa yüklendiğinde çalıştır
    renderUserCards();
    renderTransactions();
});
