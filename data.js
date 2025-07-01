// Tüm uygulama verileri
const cardTypes = {
    standard: { name: "Standart Kart", balance: 5000 },
    gold: { name: "Gold Kart", balance: 15000 },
    platinum: { name: "Platinum Kart", balance: 30000 }
};

const products = [
    { id: 1, name: "HLgame(1 tur)", price: 100, description: "1 tur HL oyun deneyimi" },
    { id: 2, name: "Tezgah Stars Ön Bilet", price: 10000, description: "Tezgah Stars etkinliği ön bilet" },
    { id: 3, name: "Tezgah Stars Ön Bilet Pro Açılı", price: 15000, description: "Tezgah Stars etkinliği VIP ön bilet" }
];

let users = JSON.parse(localStorage.getItem('hlbank_users')) || [
    {
        id: '1',
        name: 'Demo Kullanıcı',
        email: 'test@example.com',
        phone: '5551234567',
        password: '123456',
        balance: 10000,
        createdAt: new Date().toISOString()
    }
];

let cards = JSON.parse(localStorage.getItem('hlbank_cards')) || [
    {
        id: '1',
        userId: '1',
        number: '4111111111111111',
        displayNumber: '**** **** **** 1111',
        holder: 'DEMO KULLANICI',
        expiry: '12/25',
        cvc: '123',
        type: 'standard',
        balance: 5000,
        createdAt: new Date().toISOString()
    }
];

let transactions = JSON.parse(localStorage.getItem('hlbank_transactions')) || [
    {
        id: '1',
        userId: '1',
        description: 'Hoş geldiniz bonusu',
        amount: 1000,
        balance: 1000,
        date: new Date().toISOString()
    }
];
