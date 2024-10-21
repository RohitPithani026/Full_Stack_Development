const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  employeeName: String,
  employeeID: { type: String, unique: true },
  departmentName: String,
  phoneNumber: String,
  joiningDate: Date
});
module.exports = mongoose.model('Employee', employeeSchema);
