const express = require('express');
const bcrypt = require('bcrypt');
const UserRouter = express.Router();
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/User.cjs');

UserRouter.post('/Studentlogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        // Check if the provided username matches the username's present in the db
        if (!user) {
            return res.json({ error: 'User does not exist!' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({ error: 'Password is incorrect!' });
        }

        const token = jwt.sign({ username: user.username }, process.env.KEY);
        // Authentication successful
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
        return res.json({ status: true, message: 'Login Successful' });
    } catch (error) {
        console.error('Error during user login:', error);
        return res.json({ error: 'Internal server error' });
    }
});

module.exports = UserRouter;

