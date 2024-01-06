const CARDS = document.querySelector('.main-cards');
const FIRST_CARD = document.querySelector('.card');

const cards = [
    {
        imageSrc: '/assets/img/jorda-green.png',
        name: 'Air Jordan 1 Mid Dutch Green',
        category: 'Tênis Air Jordan',
        price: 1199.99
    },
    {
        imageSrc: '/assets/img/jordan-tropical.png',
        name: 'Air Jordan 1 High Zoom CMFT Tropical Twist',
        category: 'Tênis Air Jordan',
        price: 1049.00
    },
]

cards.map(card => {
    const CARD_CLONE = FIRST_CARD.cloneNode(true);
    CARD_CLONE.querySelector(".card img").src = card.imageSrc;
    CARD_CLONE.querySelector(".card-info h4").innerHTML = card.name;
});