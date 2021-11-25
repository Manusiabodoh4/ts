import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validator = (req:Request, res:Response, next:NextFunction) => {
    const {value, error} = Joi.object({
        name:Joi.string().required()
    }).validate(req.query)    
    if(error === undefined){                        
        req.query = value
        next();
        return
    }    
    const len = error.details.length
    const arrError = []
    for(let i=0;i<len;i++){
        arrError.push(error.details[i].message)
    }
    res.status(400).json({code:400, message:"Terjadi kesalahan pada request", error:arrError})
    return
}