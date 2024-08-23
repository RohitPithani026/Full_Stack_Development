<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="validation.js"></script>
</head>
<body>
    <h2>Student Registration Form</h2>
    <form name="studentForm" action="insert.php" onsubmit="return validateForm()" method="post">
        First Name: <input type="text" name="first_name"><br>
        Last Name: <input type="text" name="last_name"><br>
        Roll No: <input type="text" name="roll_no"><br>
        Password: <input type="password" name="password"><br>
        Confirm Password: <input type="password" name="confirm_password"><br>
        Contact Number: <input type="text" name="contact_number"><br>
        <input type="submit" value="Submit">
    </form>
    
    <h2>Delete Student Record</h2>
    <form action="delete.php" method="post">
        Roll No: <input type="text" name="roll_no"><br>
        <input type="submit" value="Delete">
    </form>

    <h2>Update Student Contact Number</h2>
    <form action="update.php" method="post">
        Roll No: <input type="text" name="roll_no"><br>
        New Contact Number: <input type="text" name="contact_number"><br>
        <input type="submit" value="Update">
    </form>

    <h2>View Student Records</h2>
    <form action="view.php" method="get">
        <input type="submit" value="View">
    </form>
</body>
</html>
