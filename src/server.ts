import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { connectDatabase } from './database';
import userRouter from './api/user';
import customerRouter from './api/customer';

dotenv.config();

async function start (){
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/', userRouter,customerRouter);

  await connectDatabase();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
  });
}

start();
