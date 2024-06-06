document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('day')) {
            const date = event.target.getAttribute('data-date');
            const time = event.target.getAttribute('data-time');
            openPopup(date, time);
        }
    });

    function openPopup(date, time) {
        const popup = document.getElementById('booking-popup');
        popup.setAttribute('aria-hidden', 'false');
        popup.style.display = 'flex';

        const form = document.getElementById('booking-form');
        form.onsubmit = function(event) {
            event.preventDefault();
            alert(`Booking bekræftet for ${date} kl. ${time}.`);
            closePopup();
        };
    }

    document.getElementById('close-popup').addEventListener('click', closePopup);

    function closePopup() {
        const popup = document.getElementById('booking-popup');
        popup.setAttribute('aria-hidden', 'true');
        popup.style.display = 'none';
    }
});
