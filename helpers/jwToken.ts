import jwt from "jsonwebtoken"
import { IUser } from '../interfaces';
import dotenv from 'dotenv';
const secret=process.env.SECRET
export const getToken=(usuario:IUser,)=>{
   const {nombre,apellido,correo,id}=usuario;
   return jwt.sign({nombre,apellido,correo,id},secret||"",{expiresIn:"8h"})
}
export const getUsuarioJWT=(token:string,tipo:number)=>{
    
      
      if (tipo==1) {
            
            return new Promise((resolve,reject)=>{
                  try {

                        jwt.verify(token,"PalABr1s3creT1"||"",(err,payload)=>{
                             if (err)return reject('no valido')
                             resolve(payload)
                        })
                  } catch (error) {
                        return reject('no valido')
                  }
            })    
      }

            return new Promise((resolve,reject)=>{
                  try {
                        jwt.verify((token.replace('Bearer ','')),"PalABr1s3creT1"||"",(err,payload)=>{
                             if (err)return reject('no valido')
                             resolve(payload)
                        })
                  } catch (error) {
                        return reject('no valido')
                  }})
     
}