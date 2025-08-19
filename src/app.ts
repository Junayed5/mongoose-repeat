import express, { Application } from "express";

const app: Application = express();

app.get('/', (req,res ) => {
    res.send('This is my turning point')
})

export default app; 