// Registration Form Validation
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('All fields are required!');
        event.preventDefault();
    }

    // Check the characters of password
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    alert('Successfull!');
});

// Login Form Validation
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    if (!loginEmail || !loginPassword) {
        alert('Both email and password are required!');
        event.preventDefault();
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    alert('Successfull!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Simple form validation (ensure all fields are filled)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Show success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';

    // Append the message below the form
    const form = document.getElementById('contactForm');
    form.appendChild(successMessage);

    // Optionally, clear the form after submission
    form.reset();
});

