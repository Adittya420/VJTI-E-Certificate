import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './models/User.js';
import CommitteeCard from './models/committeeCard.js'; 
import Certificate from './models/certificate.js';

// Initialize Express app
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

// API endpoint for fetching committee cards
app.get('/committee-cards', async (req, res) => {
  try {
    // Fetch all committee cards from the database
    const cards = await CommitteeCard.find();
    res.json(cards); // Send fetched cards as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// API Registration endpoint
app.post('/register', async (req, res) => {
    try {
      // Check if user already exists with the provided email
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      // Create a new user instance based on the request body
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id,
        password: req.body.password,
      });
  
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// Fetch certificates endpoint
app.get('/certificates/:committeeName/:studentId', async (req, res) => {
    const { committeeName, studentId } = req.params;
    try {
      // Fetch certificates for the given committee and student ID from the database
      const certificates = await Certificate.find({ committeeName, id: studentId });
      res.json(certificates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
