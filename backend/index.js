import express from "express";
import mongoose from "mongoose";
import {PORT, MongoDBUrl} from './config.js';

const app = express();

app.get('/' , (req,res) => res.send('Welcome to CMS !!!'));



mongoose
     .connect(MongoDBUrl)
     .then(() => {
          console.log(`App is connected to database`);
          app.listen(PORT, () => {
               console.log(`Server is running on port ${PORT}`)
          });
     })
     .catch((error) => {
          console.log(error);
     })