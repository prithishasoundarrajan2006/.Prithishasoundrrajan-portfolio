document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('responseMsg').innerText = `Thanks for contacting, ${name}! I will reach out soon.`;
        this.reset(); // Clear the form
    } else {
        document.getElementById('responseMsg').innerText = 'Please fill in all fields.';
    }
});
