import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema(
     {

     }
);


export const Employee = mongoose.model('Employee', employeeSchema);