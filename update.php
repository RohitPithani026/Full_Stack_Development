<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $roll_no = $_POST['roll_no'];
    $contact_number = $_POST['contact_number'];

    $sql = "UPDATE students SET contact_number='$contact_number' WHERE roll_no='$roll_no'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
