import { Schema, model } from 'mongoose';
// import userModel from './userModel';
 
const noteSchema = new Schema({
  title: {type :String, required :true} ,
  desc: {type :String, required :true} ,
  createdBy: {
    type : Schema.Types.ObjectId,
    ref: 'user' // Reference to the User model
}
} ,
{timestamps :true}
);

const noteModel = model('note', noteSchema);

export default noteModel;
