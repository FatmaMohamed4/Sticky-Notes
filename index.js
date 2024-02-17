import express, { Router, json, urlencoded } from 'express';
import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';
import morgan from 'morgan';
import mongoose from 'mongoose';


import { default as connectDB } from './connectDB.js';
import noteRoute from './routes/noteRoute.js';
import userRoute from './routes/userRoute.js';
// dotenv.config({ path: 'config.env' });


const app =express()
app.use(express.json())
app.use(noteRoute)
app.use(userRoute)
  // Middleware to parse URL-encoded bodies
  app.use(urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(json());


// Start the server 
const PORT =3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB()

