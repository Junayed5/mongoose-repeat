import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

const notesSchema = new Schema({
    title: String,
    content: String
})

const Note = model("Note", notesSchema);



app.get('/', (req:Request,res:Response ) => {
    res.send('This is my turning point')
})
app.post('/create-note', async(req:Request,res:Response ) => {
    const newNote = new Note({
        title: "Learning Mongoose",
        content: "I am learning mongoose to update Myself"
    });

    await newNote.save()

    res.status(201).json({
        success: true,
        message : "New note created successfully",
        note: newNote
    })
})

export default app; 