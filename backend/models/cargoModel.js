import mongoose from 'mongoose';


const cargoSchema = mongoose.Schema(
     {      
       
          name:{
               type: String ,
               required : true,
          },
          description:{
               type:String
          },
          category:{
               type : String
          },
          storedBy:{
               type : String
          },
          storeID:{
               type : String
          },
          status:{
               type: String,
          },
          amount:{
               type: Number
          },
     },     
          {
               timestamps: true
          }
);

export const Cargo = mongoose.model('Cargo',cargoSchema);