import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

const notesSchema = new Schema({
  title: { type: String, require: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "study", "other"],
    default: "personal",
  },
  pinned: { type: Boolean, default: false },
  tags: {
    label: { type: String, require: true },
    color: { type: String, default: "gray" },
  },
});

const Note = model("Note", notesSchema);

app.get("/", (req: Request, res: Response) => {
  res.send("This is my turning point");
});

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: notes,
  });
});

app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  //   const note = await Note.findOne({_id : noteId});
  const note = await Note.findById(noteId);

  res.status(201).json({
    success: true,
    message: "New note created successfully",
    note: note,
  });
});

app.post("/note/create-note", async (req: Request, res: Response) => {
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

app.patch("/notes/:noteId", async (req: Request, res: Response) => {
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
app.patch("/notes/:noteId", async (req: Request, res: Response) => {
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

export default app;
