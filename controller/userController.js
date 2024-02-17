// //   
// import connectDB from '../connectDB';
// import { hash, compare } from 'bcryptjs';
// import { validationResult } from 'express-validator';

import userModel from "../model/userModel.js";

class userController {
  static SignUp = async (req, res) => {
    await userModel.insertMany(req.body)
    res.json({message:"Sign Up successed >>"})
}

//   static logIn = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json(errors.array());
//     }

//     try {
//         const db = await connectDB();
//         const collection = db.collection('user');

//         const { email, password } = req.body;
//         const user = await collection.findOne({ email });

//         if (!user) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         const isPasswordValid = await compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         // Authentication successful, here you may generate a JWT token and send it back to the client

//         res.status(200).json({ message: 'Logged in successfully ' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }
}

export default userController ;