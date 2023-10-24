import mongoose from 'mongoose';


const employeeSchema = mongoose.Schema(
     {      
          id:{
               type: String ,
               required : true,
               unique : true
          },
          firstname:{
               type: String ,
               required : true,
          },
          lastname:{
               type: String 
          },
          address:{
               type: String,
               required : true
          },
          salary:{
               type: Number,
               required : true

          }
     },     
          {
               timestamps: true
          }
);

export const Employee = mongoose.model('Employee',employeeSchema);