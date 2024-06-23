import express from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import User from '../model/userSchema.js';

const router = express.Router();

router.get('/api/verifyToken', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ role: user.role, ...user._doc });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
