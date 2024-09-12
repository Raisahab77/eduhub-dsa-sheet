const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Helper to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
};

// Sign Up (Register)
exports.signUp = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    password = await bcrypt.hash(password, 10);

    user = await User.create({ email, password });

    const token = generateToken(user);
    return res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await verifyPassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);
    return res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};


const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};