
const form = document.querySelector('form');
const thankYouDialog = document.querySelector('.thank-you-dialog');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.thank-you-dialog button');

function showThankYouDialog(event) {
    event.preventDefault();
    overlay.style.display = 'block';
    thankYouDialog.style.display = 'block';
}

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    thankYouDialog.style.display = 'none';
    window.location.href = 'store.html';
});

form.addEventListener('submit', showThankYouDialog);
function closePage() {
    if (confirm('Are you sure you want to close this page?')) {
        window.location.href = 'store.html';
    }
}