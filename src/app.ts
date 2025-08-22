import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { notesRouter } from "./controller/notes.controller";
import { userRouter } from "./controller/users.controller";

const app: Application = express();
app.use(express.json());
app.use('/notes', notesRouter);
app.use('/users', userRouter)



app.get("/", (req: Request, res: Response) => {
  res.send("This is my turning point");
});



export default app;
