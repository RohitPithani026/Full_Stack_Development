import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentForm.css';

function StudentForm() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    rollNo: '',
    password: '',
    confirmPassword: '',
    contactNumber: ''
  });

  const [students, setStudents] = useState([]); // State to hold the list of students
  const [isUpdateMode, setIsUpdateMode] = useState(false); // Track if we are in update mode
  const [rollNoToUpdate, setRollNoToUpdate] = useState(''); // Store rollNo of student being updated
  const [rollNoToDelete, setRollNoToDelete] = useState(''); // State for Roll No to delete

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Insert new student or update existing student
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      handleUpdate(); // If in update mode, call update function
    } else {
      try {
        await axios.post('http://localhost:5000/api/students', student);
        alert('Student added successfully');
        fetchStudents(); // Refresh the list after insertion
        resetForm();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Handle updating student details
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/students/${rollNoToUpdate}`, student);
      alert(`Student with Roll No ${rollNoToUpdate} updated successfully`);
      resetForm(); // Reset update mode and form fields
      fetchStudents(); // Refresh the list after update
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  // Handle deleting student
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/students/${rollNoToDelete}`);
      alert(`Student with Roll No ${rollNoToDelete} deleted successfully`);
      setRollNoToDelete(''); // Reset the delete field
      fetchStudents(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Set student details in form when update button is clicked
  const handleEditClick = (studentToEdit) => {
    setStudent({
      firstName: studentToEdit.firstName,
      lastName: studentToEdit.lastName,
      rollNo: studentToEdit.rollNo,
      password: '',
      confirmPassword: '',
      contactNumber: studentToEdit.contactNumber
    });
    setRollNoToUpdate(studentToEdit.rollNo); // Store the rollNo for updating
    setIsUpdateMode(true); // Switch to update mode
  };

  // Reset form fields and state
  const resetForm = () => {
    setStudent({ firstName: '', lastName: '', rollNo: '', password: '', confirmPassword: '', contactNumber: '' });
    setRollNoToUpdate('');
    setIsUpdateMode(false);
  };

  // Fetch all students when component loads
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="student-form-container">
      {/* Form for Add or Update */}
      <form onSubmit={handleSubmit} className="student-form">
        <h2>{isUpdateMode ? 'Update Student' : 'Add New Student'}</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Roll No"
          value={student.rollNo}
          onChange={handleChange}
          disabled={isUpdateMode} // Disable rollNo input in update mode
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={student.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={student.confirmPassword}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={student.contactNumber}
          onChange={handleChange}
        />
        <button type="submit">{isUpdateMode ? 'Update Student' : 'Add Student'}</button>
      </form>

      {/* Delete student form */}
      <form onSubmit={handleDelete} className="delete-form">
        <h2>Delete Student by Roll No</h2>
        <input
          type="text"
          placeholder="Enter Roll No"
          value={rollNoToDelete}
          onChange={(e) => setRollNoToDelete(e.target.value)} // Update state for Roll No to delete
        />
        <button type="submit">Delete Student</button>
      </form>

      {/* Table displaying all students with update button */}
      <div className="student-list">
        <h2>Student Records</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Roll No</th>
              <th>Contact Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.rollNo}>
                <td>{stu.firstName}</td>
                <td>{stu.lastName}</td>
                <td>{stu.rollNo}</td>
                <td>{stu.contactNumber}</td>
                <td>
                  <button onClick={() => handleEditClick(stu)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentForm;
