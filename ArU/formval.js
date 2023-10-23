function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = '';
    });

    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Invalid email format';
    }

    if (message.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required';
    }

    if (name.value.trim() !== '' && emailPattern.test(email.value.trim()) && message.value.trim() !== '') {
        document.getElementById('contactForm').submit();
    }
}