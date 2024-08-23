function validateForm() {
    let firstName = document.forms["studentForm"]["first_name"].value;
    let lastName = document.forms["studentForm"]["last_name"].value;
    let rollNo = document.forms["studentForm"]["roll_no"].value;
    let password = document.forms["studentForm"]["password"].value;
    let confirmPassword = document.forms["studentForm"]["confirm_password"].value;
    let contactNumber = document.forms["studentForm"]["contact_number"].value;

    if (firstName == "" || lastName == "" || rollNo == "" || password == "" || confirmPassword == "" || contactNumber == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    if (!/^\d{10}$/.test(contactNumber)) {
        alert("Invalid contact number");
        return false;
    }

    return true;
}
