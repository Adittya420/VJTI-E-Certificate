import express from 'express';
import User from '../model/userSchema.js';
import CommitteeCard from '../model/committeeCards.js'; 
import Certificate from '../model/certificateSchema.js';


const userRouter = express();

// API endpoint for fetching committee cards
userRouter.get('/get-committee-cards', async (req, res) => {
  try {
    // Fetch all committee cards from the database
    const cards = await CommitteeCard.find();
    res.json(cards); // Send fetched cards as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// API endpoint for adding committee cards to database
userRouter.post('/add-committee-card', async (req,res) => {
  try {
    // Create a new card and save it to the database
    const{title,image,description}=req.body;
    const card = new CommitteeCard({
      title,
      image,
      description
    });
    await card.save();
    
    res.sendStatus(201);  // Send 201 status code on successful creation of resource
  } catch (error) {
    console.log('Error in POST /add-card', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// API Registration endpoint
userRouter.post('/register', async (req, res) => {
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
userRouter.get('/certificates/:committeeName/:studentId', async (req, res) => {
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

export default userRouter; // Export the router
