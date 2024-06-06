import express from 'express';
import User from '../model/userSchema.js';
import CommitteeCard from '../model/committeeCards.js'; 
import Certificate from '../model/certificateSchema.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';
import dotenv from 'dotenv';
dotenv.config();

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

// Define API endpoint for removing a committee
userRouter.delete('/committees/:committeeTitle', async (req, res) => {
  const committeeTitle = req.params.committeeTitle;
  try {
    // Find the committee by its title and remove it from the database
    const removedCommittee = await CommitteeCard.findOneAndRemove({ title: committeeTitle });
    if (!removedCommittee) {
      return res.status(404).json({ message: 'Committee not found' });
    }
    res.json({ message: 'Committee removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// API Registration endpoint  //DONE
userRouter.post('/register', async (req, res) => {
    try {
      // Check if user already exists with the provided email
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
      
      const { name, email, id, password } = req.body;
      const hashedPassword = bcryptjs.hashSync(password, 10);

      // Create a new user instance based on the request body
      const newUser = new User({
        name,
        email,
        id,
        password: hashedPassword
      });
  
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

// API for login user    //DONE
userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ error: 'User not found!' });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Wrong credentials!' });
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
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
