import express  from "express"
import userController from "../controller/userController.js";

const userRoute = express.Router();


userRoute.post ('/signup',userController.SignUp);


export default  userRoute