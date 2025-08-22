import express, { Request, Response } from 'express'
import { Note } from '../models/notes.models';

export const notesRouter = express.Router()

notesRouter.get("", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: notes,
  });
});

notesRouter.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  //   const note = await Note.findOne({_id : noteId});
  const note = await Note.findById(noteId);

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: note,
  });
});

notesRouter.post("/create-note", async (req: Request, res: Response) => {
  // Approach-1
  //   const newNote = new Note({
  //     title: "Learning Mongoose",
  //     tags: {
  //         label: 'DATABASE'
  //     }
  //   });

  //   await newNote.save();

  // Approach - 2

  const body = req.body;

  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: note,
  });
});

notesRouter.patch("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const body = req.body;
  const note = await Note.findByIdAndUpdate(noteId, body,{new: true});
  // // const note = await Note.updateOne({_id : noteId}, body, {new: true});
  // const note = await Note.findOneAndUpdate({ _id: noteId }, body, {
  //   new: true,
  // });

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: note,
  });
});
notesRouter.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndUpdate(noteId);
  // // const note = await Note.deleteOne({_id : noteId}, body, {new: true});
  // const note = await Note.findByIdAndDelete({ _id: noteId }, body, {
  //   new: true,
  // });

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: note,
  });
});