import React, { createContext ,useReducer,FC} from 'react';
import { IUser,IRegistro, IMsg, ILogin } from '../interfaces';
import { authReducer } from './authReducer';
import { useMutation } from '@apollo/client';
import { M_NEWUSUARIO, M_LOGINUSUARIO } from '../interfaces/mutation';
import { getUsuarioJWT } from '../helpers/jwToken';
import Cookies from 'js-cookie';
interface AuthProps {
    registrar:(data:IRegistro)=>Promise<IMsg>,
    logins:(data:ILogin)=>Promise<IMsg>
}
export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}
const INICIAL:AuthState={
  isLoggedIn:false,
  user:undefined
}
interface Prop{
    children:JSX.Element
}
export const AuthContext = createContext({} as AuthProps );
export const AuthProvider=({children}:Prop) =>{
    const [state, dispatch] = useReducer(authReducer,INICIAL);
    const [nuevoUsuario]=useMutation(M_NEWUSUARIO)
    const [loginUsuario]=useMutation(M_LOGINUSUARIO)
     const registrar=async({nombre,correo,apellido,password,password2}:IRegistro)=>{
        if (password==password2) {
            try {
                
               const {data}=await nuevoUsuario({variables:{input:{nombre,apellido,correo,password}}})
               const {...us}=data.nuevoUsuario
               //dispatch({type:"Login",payload:data.nuevoUsuario})
               return {estado:'1',valor:'EXCELENTE'}as IMsg
            } catch (error:any) {
                return {estado:'0',valor:error.message}as IMsg
            }
        }
        return {estado:'0',valor:'password Invalidos'}as IMsg
     }
     const logins=async({correo,password}:ILogin)=>{
          try {
            const {data}=await loginUsuario({variables:{input:{correo,password}}})
            const {token}=data.loginUsuario
            getUsuarioJWT(token,1).then(e=>{

                console.log(e);
            })
            
            //Cookies.set('token',token)
            return {estado:'1',valor:'Buena compra'}as IMsg
          } catch (error:any) {
            return {estado:'0',valor:error.message}as IMsg
          }
     }

    return (
        <AuthContext.Provider
        value={{
            registrar,
            logins
        }}>
        {children}
        </AuthContext.Provider>
    );
}

