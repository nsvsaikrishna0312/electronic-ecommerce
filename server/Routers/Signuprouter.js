const express = require('express');
const router = express.Router();
const Signup = require('../Models/Signup');

// POST: Register a new user
router.post('/', async (req, res) => {
  const { username, gmail, password, phone_number, dob } = req.body;

  try {
    const existingUser = await Signup.findOne({ $or: [{ username }, { gmail }, { phone_number }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Username, Gmail, or Phone number is already in use.' });
    }

    const signup = new Signup({ username, gmail, password, phone_number, dob });
    await signup.save();
    res.status(201).json(signup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Get all users
router.get('/', async (req, res) => {
  try {
    const signup = await Signup.find();
    res.json(signup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Get user by username
router.get('/:username', async (req, res) => {
  try {
    const signup = await Signup.findOne({ username: req.params.username });
    res.json(signup);
  } catch (error) {
    res.status(404).json({ message: 'User not found.' });
  }
});

// PUT: Update user details by username
router.put('/:username', async (req, res) => {
  const { gmail, password, phone_number, dob } = req.body;

  try {
    const updatedSignup = await Signup.findOneAndUpdate({ username: req.params.username }, {
      gmail,
      password,
      phone_number,
      dob,
    });
    res.json(updatedSignup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Delete user by username
router.delete('/:username', async (req, res) => {
  try {
    const deletedSignup = await Signup.findOneAndDelete({ username: req.params.username });
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




module.exports = router;



