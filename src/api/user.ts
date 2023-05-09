import * as express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { userSchema } from '../schema';
import bcrypt from 'bcryptjs';

const router = express.Router();
const User = mongoose.model('User', userSchema);

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
    
        if (!user) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }
    
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        const token = jwt.sign({ email: user.email }, process.env.ENCRYPT_KEY , { expiresIn: '1h' });
        res.status(200).json({ token, userId: user._id });

    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


router.post('/signup', async (req, res) => {
    try {

      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword
      });
  
      await newUser.save();
      const token = jwt.sign({ email: newUser.email }, process.env.ENCRYPT_KEY, { expiresIn: '1h' });
      res.status(201).json({ token, userId: newUser._id });
  
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
});

export default router;