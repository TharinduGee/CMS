import express from "express";
import mongoose from "mongoose";
import {PORT, MongoDBUrl} from './config.js';
import cors from 'cors';
import apiRouter from './routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.use(
     cors({
         origin: 'http://localhost:3000',
         methods: ['GET', 'POST', 'PUT', 'DELETE'],
         allowedHeaders: ['Content-Type','Origin','X-Requested-With','Accept'],
     })
 ) 
 

app.use(express.json());
app.use('/api',apiRouter);

app.use(cors());


app.get('/' , (req,res) => res.send('Welcome to CMS !!!'));

app.get('/name' , async(req,res) => {
     if(!req.query.id){
          return res.send({
               error : "There is no name"
          })
     }
     const data = req.query.id;
     return res.json({message : data});
})

mongoose
     .connect(MongoDBUrl)
     .then(() => {
          console.log(`App is connected to database`);
          app.listen(PORT, () => {
               console.log(`Server is running on port ${PORT}`);
          });
     })
     .catch((error) => {
          console.log(error);
     })


