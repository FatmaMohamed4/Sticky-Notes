import express from "express"
import noteController from "../controller/noteController.js";

const noteRoute = express.Router();

noteRoute.post ('/addNote',noteController.addNote);

noteRoute.put ('/updateNote/:id',noteController.updateNoteById);

noteRoute.get ('/allNotes',noteController.allNotes);
noteRoute.get ('/getNode/:id',noteController.getNote);

noteRoute.delete ('/deleteNode/:id',noteController.deleteNote);
export default  noteRoute
