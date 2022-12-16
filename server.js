import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import path from 'path';
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 9000;
console.log(process.env.MONGO_CLIENT);


//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

import {mongoConnect} from './src/config/dbConfig.js'
mongoConnect();


// api endpoint
import taskRouter from './src/taskRouter.js'
app.use('/api/v1/task', taskRouter);

const __dirname = path.resolve();
console.log();

app.use(express.static(path.join(__dirname, "/client/build")))

app.use('/a', (req, res)  => {
  res.sendFIle(path.join(__dirname, "/client/build/index.html"));
});



app.use("*",(error, req, res, next)  => {
  res.status(400).json({
    status:"error",
    messsage: "invalid request",
  });
});

app.use("*",(error, req, res, next)  => {
  res.status(500).json({
    status:"error",
    messsage: error.messsage,
  });
 

});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});

