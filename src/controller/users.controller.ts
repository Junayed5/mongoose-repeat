import express, { Request, Response } from "express";
import { User } from "../models/user.models";
import z from "zod";

export const userRouter = express.Router();

const createUserByZod = z.object({
  fir stName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

userRouter.post("/create-user", async (req: Request, res: Response) => {
  try {
    const body =  await createUserByZod.parseAsync(req.body);
    // const users = await User.create(body);
    console.log(body, 'zod body')

    res.status(201).json({
      success: true,
      message: "User added successfully",
      users: {},
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "user not found",
      error,
    });
  }
});
userRouter.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    message: "All Users got it",
    users,
  });
});

userRouter.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const users = await User.findById(userId);

  res.status(200).json({
    success: true,
    message: "All Users got it",
    users,
  });
});

userRouter.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const body = req.body;
  //   const users = await User.findByIdAndUpdate(userId, body, {new: true})
  const users = await User.findOneAndUpdate({ _id: userId }, body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "User Successfully Updated",
    users,
  });
});
userRouter.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const users = await User.findByIdAndDelete(userId);

  res.status(200).json({
    success: true,
    message: "Successfully User Deleted",
    users,
  });
});
