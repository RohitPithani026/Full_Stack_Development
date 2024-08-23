CREATE DATABASE student_registration;

USE student_registration;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    roll_no VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    contact_number VARCHAR(15) NOT NULL
);
