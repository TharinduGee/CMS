import Joi from 'joi';



const status = ['In stock', 'Dispatched'];

module.exports = {
     create: {
          body: Joi.object({
               _id : Joi.forbidden(),
               title : Joi.string().required(),
               description : Joi.string().optional(),
               duration : Joi.string().optional().allow(null),
               releasedate : Joi.date().optional().allow(null),
               studio : Joi.string().optional(),
               rating : Joi.number().optional(),
               imageUrl : Joi.string().allow(null).optional(),
               tag : Joi.string().valid(...tags).optional(),
               
          })
     }, 

     update: {
          body: Joi.object({
               _id : Joi.forbidden(),
               title : Joi.string().required(),
               description : Joi.string().optional(),
               duration : Joi.string().optional().allow(null),
               releasedate : Joi.date().optional().allow(null),
               studio : Joi.string().optional(),
               rating : Joi.number().optional(),
               imageUrl : Joi.string().allow(null).optional(),
               tag : Joi.string().valid(...tags).optional(),
          })
     }
}