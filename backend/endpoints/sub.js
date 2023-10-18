const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const userAuth = require('../config/auth');

router.get('/:email',async (req, res, next) => {
    const _email = req.params.email;
    console.log(_email)

    try {
      const user = await User.findOne({email: _email });
    console.log(user)
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const { subscription } = user;
  
      if (!subscription) {
        return res.status(404).json({ error: 'No subscription found for this user' });
      }
  
      res.json(subscription);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; 