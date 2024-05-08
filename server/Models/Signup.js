const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const signupSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  gmail: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone_number: { type: String, unique: true, required: true },
  dob: { type: String, required: true },
});

module.exports = mongoose.model('Signup',signupSchema);
                                                    