import express from 'express';
import Certificate from '../model/certificateSchema.js';
import CommitteeCard from '../model/committeeCards.js'; 

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


// API endpoint for adding committee cards to database
adminRouter.post('/add-committee-card', async (req,res) => {
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
adminRouter.delete('/committees/:committeeTitle', async (req, res) => {
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

export default adminRouter;