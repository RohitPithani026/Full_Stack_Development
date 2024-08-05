document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const resultDiv = document.getElementById('result');
    const changeTextBtn = document.getElementById('change-text-btn');
    const image = document.getElementById('image');
    const changeImageBtn = document.getElementById('change-image-btn');
    const deleteNodeBtn = document.getElementById('delete-node-btn');

    // Form Validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value.trim();
        const course = document.getElementById('course').value.trim();
        const enrollmentDate = document.getElementById('enrollment-date').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        let errors = [];

        if (!username) errors.push("Username cannot be empty.");
        if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,3}$/)) errors.push("Invalid email address.");
        if (!phone.match(/^\d{10}$/)) errors.push("Phone number must be 10 digits.");
        if (!dob) errors.push("Date of Birth cannot be empty.");
        if (gender === "") errors.push("Gender must be selected.");
        if (!address) errors.push("Address cannot be empty.");
        if (!course) errors.push("Course cannot be empty.");
        if (!enrollmentDate) errors.push("Enrollment Date cannot be empty.");
        if (password.length < 7 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[&$#@]/.test(password)) {
            errors.push("Password must be at least 7 characters long, include at least one capital letter, one digit, and one special character.");
        }
        if (password !== confirmPassword) errors.push("Passwords do not match.");

        if (errors.length) {
            resultDiv.innerHTML = errors.join('<br>');
            resultDiv.style.color = 'red';
        } else {
            // Save data to localStorage
            const formData = {
                username,
                email,
                phone,
                dob,
                gender,
                address,
                course,
                enrollmentDate,
                password
            };
            localStorage.setItem('registrationData', JSON.stringify(formData));

            resultDiv.innerHTML = "Registration successful!";
            resultDiv.style.color = 'green';
            form.reset(); // Reset form fields
        }
    });

    // Change text button functionality
    changeTextBtn.addEventListener('click', function() {
        resultDiv.innerHTML = "Text has been changed!";
        resultDiv.style.color = 'blue';
    });

    // Change image source button functionality
    changeImageBtn.addEventListener('click', function() {
        image.src = 'new-image.jpg';
    });

    // Add a text node
    resultDiv.innerHTML += '<p id="new-text">This is additional text added dynamically.</p>';

    // Delete a text node
    deleteNodeBtn.addEventListener('click', function() {
        const newText = document.getElementById('new-text');
        if (newText) newText.remove();
    });
});