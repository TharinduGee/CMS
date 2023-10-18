import { Cargo } from "../models/cargoModel.js";
import httpStatus from "http-status";

const create = async (req, res, next) => {
  try {
    const cargoData = req.body;
    const cargo = new Cargo(cargoData);
    await cargo.save();
    return res.status(httpStatus.CREATED).json({ cargo });
  } catch (error) {
     res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
    next(error);
  }
};

const view = async(req,res,next) =>{
     try{
          const {id} = req.params;
          const cargo = await Cargo.findById(id).select('-__v');
          if(!cargo){
               throw error('Movie is not found!');
          }
          return res.status(httpStatus.OK).json(cargo);
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          next(error);
     }
};

const update = async(req,res,next) =>{
     try{
          const {id} = req.params;
          const editedrecord = req.body;
          const updateCargo = await Cargo.findByIdAndUpdate(id,editedrecord);
          return res.status(httpStatus.OK).send({messege : "Updated succesfully"});
     }catch(error){
          next(error);
     }
};

const remove =  async(req,res,next)=>{
     try{
          const {id} = req.params;
          const deleteCargo = await Cargo.findByIdAndDelete(id);

          if(!deleteCargo){
               //throm Error("Movie not found");
               console.log("No cargo found");
          }

          return res.status(httpStatus.OK).json({deleteCargo});
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege})
          next(error);
     }
};

const list = async(req,res,next) =>{
     try{
          const {sortBy = "name", order = "asc" } = req.query;    
          
          const cargoes = await Cargo.find({})
             .sort({ [sortBy]: order})   
             //.select("-__v -_id");
          

          return res.status(200).json({data: cargoes});
     }catch(error){
          res.status(httpStatus.NOT_FOUND).send({messege: error.messege});
          next(error);
     }

}

export default {create ,view ,update ,remove,list};
