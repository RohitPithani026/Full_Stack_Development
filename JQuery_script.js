$(document).ready(function() {
    // Change button text using jQuery
    $('#submit-btn').text('Register Now');

    // Set background image using jQuery CSS property
    $('body').css('background-image', 'url("background.jpg")');

    // Access HTML form data using jQuery
    $('#submit-btn').click(function() {
        const formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            dob: $('#dob').val(),
            gender: $('#gender').val(),
            address: $('#address').val(),
            course: $('#course').val(),
            enrollmentDate: $('#enrollment-date').val(),
            password: $('#password').val(),
            confirmPassword: $('#confirm-password').val()
        };
        console.log('Form Data:', formData);
    });

    // Add attribute using jQuery
    $('#submit-btn').attr('title', 'Click to register');
});
