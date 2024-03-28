const express = require('express');
const router = express.Router();
const User = require('../models/User.cjs');

// Middleware to protect the route
router.use((req, res, next) => {
    // Check if user is authenticated
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
});

// Route to fetch user details
router.get('/details', async (req, res) => {
    // try {
    //     console.log('Request object:', req); // Log the entire req object
    //     console.log('User ID:', req.user._id); // Log the user ID
        
        // Retrieve user details from the database
        const user = await User.findById(req.user._id); // Assuming user ID is stored in req.user._id after authentication
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Send user details as response
        res.status(200).json({ user });
    // } catch (err) {
    //     console.error('Error fetching user details:', err);
    //     res.status(500).json({ message: 'Internal server error' });
    // }
});

module.exports = router;
