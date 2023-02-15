const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a student schema and model

const studentSchema = new Schema({
  name: {
    type: String,
  },
  roll: {
    type: String,
    required: [true, "Role field is required"],
  },
  present: {
    type: Boolean,
    default: true,
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
