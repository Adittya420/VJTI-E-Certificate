import express from 'express';
import Certificate from '../model/certificateSchema.js';

const adminRouter = express();

// API endpoint for adding committee cards to database
adminRouter.post('/add-certificate', async (req,res) => {
    try {
      // Create a new card and save it to the database
      const{committeeName,name,reg_id,year,certificateLink}=req.body;
      const certificate = new Certificate({
        committeeName,
        name,
        reg_id,
        year,
        certificateLink
      });
      await certificate.save();
      
      res.sendStatus(201);  // Send 201 status code on successful creation of resource
    } catch (error) {
      console.log('Error in POST /add-certificate', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


export default adminRouter;