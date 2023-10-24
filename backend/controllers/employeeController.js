import { Employee } from "../models/employeeModel.js";
import httpStatus from "http-status";

const create = async (req, res, next) => {
  try {
    const employeeData = req.body;
    const employee = new Employee(employeeData);
    await employee.save();
    return res.status(httpStatus.CREATED).json({ employee });
  } catch (error) {
     res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
    next(error);
  }
};

const view = async(req,res,next) =>{
     try{
          const {id} = req.params;
          const employee = await Employee.findById(id).select('-__v');
          if(!employee){
               res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          }
          return res.status(httpStatus.OK).json(employee);
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          next(error);
     }
};
const find = async(req,res,next) =>{
     try{
          const {EmpId} = req.params;
          const employee = await Employee.findOne({id : EmpId});
          if(!employee){
               res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          }
          return res.status(httpStatus.OK).json(employee);
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          next(error);
     }
};

const update = async(req,res,next) =>{
     try{
          const {id} = req.params;
          const editedrecord = req.body;
          const updateEmployee = await Employee.findByIdAndUpdate(id,editedrecord);
          return res.status(httpStatus.OK).send({messege : "Updated succesfully"});
     }catch(error){
          next(error);
     }
};

const remove =  async(req,res,next)=>{
     try{
          const {id} = req.params;
          const deleteEmployee = await Employee.findByIdAndDelete(id);

          if(!deleteEmployee){
               //throm Error("Movie not found");
               console.log("No cargo found");
          }

          return res.status(httpStatus.OK).json({deleteEmployee});
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          next(error);
     }
};

const list = async(req,res,next) =>{
     try{
          const {sortBy = "name", order = "asc" } = req.query;    
          
          const employees = await Employee.find({})
             .sort({ [sortBy]: order})   
             //.select("-__v -_id");
          

          return res.status(200).json({data: employees});
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege});
          next(error);
     }

}

export default {create ,view ,update ,remove,list ,find};
