document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

function autoFill() {
    document.getElementById('name').value = "Lari Rabello";
    document.getElementById('number').value = "0123 5678 2345 1234";
    document.getElementById('date').value = "12/2025";
    document.getElementById('cvv').value = "***";
    document.getElementById('amount').value = "1000000";
}
document.getElementById('openPopup1').addEventListener('click', function () {
    document.getElementById('popup1').style.display = 'flex';
});

document.getElementById('closePopup1').addEventListener('click', function () {
    document.getElementById('popup1').style.display = 'none';
});

function autoFill() {
    document.getElementById('name').value = "Lari Rabello";
    document.getElementById('number').value = "0123 5678 2345 1234";
    document.getElementById('tel').value = "+94712345678";
    document.getElementById('country').value = "Sri Lanka";
    document.getElementById('amount').value = "1000000";
}
