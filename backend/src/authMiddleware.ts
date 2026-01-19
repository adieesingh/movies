import type { NextFunction,Request,Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const roleIs ="user"
export const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    try{
      const header = req.headers.authorization
       if(!header){
        return res.status(411).json({
          message:"Token didnt get "      
        })
       }
       console.log(header)

       const authHeader = header.startsWith("Bearer")?header.substring(7):header
       console.log(authHeader)
       const decode = jwt.verify(authHeader,process.env.JWT_SECRET as string)
       console.log(decode)
       if(!decode){
        
        return res.status(411).json({
            message:`Something went wrong`
        })

       }
      //@ts-ignore
       if(decode.role=="user"){
        console.log(`i am in user`)
            return res.status(411).json({
                message:`Only admin can acess it`
            })
       }
       //@ts-ignore
       if(decode.role=="admin"){
        console.log('i am in admin')
        //@ts-ignore
        req.userId=decode._id,
        //@ts-ignore
        req.name=decode.email
        next();
       }
    } catch(error){
        return res.status(500).json({
            message:`Something went wrong ${error}`
        })

    }
}

