document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;

    if (name && checkinDate && checkoutDate) {
        document.getElementById('confirmation-message').textContent = `Thank you, ${name}! Your booking from ${checkinDate} to ${checkoutDate} has been confirmed.`;
    } else {
        document.getElementById('confirmation-message').textContent = 'Please fill out all fields!';
        document.getElementById('confirmation-message').style.color = 'red';
    }
});
