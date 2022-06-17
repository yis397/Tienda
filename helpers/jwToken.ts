import jwt from "jsonwebtoken"
import { promises } from "stream";
import { IUser } from '../interfaces';


export const getToken=(usuario:IUser,)=>{
   const {nombre,apellido,correo,id}=usuario;
   return jwt.sign({nombre,apellido,correo,id},process.env.SECRET||"",{expiresIn:"8h"})
}
export const getUsuarioJWT=(token:string,tipo:1)=>{
      const usuario=  jwt.verify(token,process.env.SECRET||"")
      if (tipo==1) {
            
            return new Promise((resolve,reject)=>{
                  try {
                        jwt.verify(token,process.env.SECRET||"",(err,payload)=>{
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
                        jwt.verify((token.replace('Bearer ','')),process.env.SECRET||"",(err,payload)=>{
                             if (err)return reject('no valido')
                             resolve(payload)
                        })
                  } catch (error) {
                        return reject('no valido')
                  }})
     
}