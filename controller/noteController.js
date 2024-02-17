import mongoose from 'mongoose';
import noteModel from '../model/noteModel.js';
import { param } from 'express-validator';


class noteController{

   static addNote =async(req,res)=>{
    await noteModel.insertMany(req.body);
    res.json({msg :"Note is Added"})
   }

  static allNotes =async(req,res)=>{
   let x = await noteModel.find().populate('createdBy','-password')
   res.json({ msg:"notes :" , x });
  }
  
  static getNote =async(req,res)=>{
    const id = req.params.id;
          try{
            const note = await noteModel.findOne({ _id: id }).populate('createdBy','-password')
        
            if (note) {
              res.header('Content-Type', 'application/json');
              res.send(note);
            } else {
              res.status(404).send('Note is not found');
            }
          } catch (error) {
            console.error('Error reading note by id:', error);
            res.status(500).send('Internal Server Error');
          }
   }


  static updateNoteById =async(req,res)=>{
   let note = await noteModel.findByIdAndUpdate({_id:req.params.id},{desc:req.body.desc},{new:true})
    res.json({ msg: "Updated Note" ,note});
  }

  static deleteNote =async(req,res)=>{
    let note = await noteModel.findByIdAndDelete({_id:req.params.id})
    res.json({ msg: "Note is deleted" });
  }
}
export default noteController