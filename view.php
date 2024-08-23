<?php
include 'connect.php';

$sql = "SELECT * FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>First Name</th><th>Last Name</th><th>Roll No</th><th>Contact Number</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["first_name"]."</td><td>".$row["last_name"]."</td><td>".$row["roll_no"]."</td><td>".$row["contact_number"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>
