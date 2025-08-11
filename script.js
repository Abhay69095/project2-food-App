let redeembtn= document.getElementById('reedem-btn');
let giftCards = document.getElementById('giftcards');
let closeBtn = document.getElementById('close-btn');
redeembtn.addEventListener('click', function() {
    giftCards.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    giftCards.style.display = 'none';
});