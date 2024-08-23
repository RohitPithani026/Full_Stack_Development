<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $roll_no = $_POST['roll_no'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $contact_number = $_POST['contact_number'];

    $sql = "INSERT INTO students (first_name, last_name, roll_no, password, contact_number) 
            VALUES ('$first_name', '$last_name', '$roll_no', '$password', '$contact_number')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
