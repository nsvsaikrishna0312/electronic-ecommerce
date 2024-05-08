const express = require('express');
const router = express.Router();
const Login = require('../Models/Signup');

router.post('/', async (req, res) => {
    try {
        const username = String(req.body.username);
        const password = String(req.body.password);
        
        const user = await Login.findOne({ username: username });
      
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords without bcrypt (not secure, for demonstration purposes only)
        if (password === user.password) {
            // Passwords match - Authentication successful
            return res.status(200).json({ message: 'Authentication successful' });
        } else {
            // Passwords do not match - Authentication failed
            return res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (error) {
        // Handle any errors that occurred during the authentication process
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
