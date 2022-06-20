import React, { createContext ,useReducer,FC} from 'react';
import { IUser,IRegistro, IMsg, ILogin, Q_SLUGS } from '../interfaces';
import { authReducer } from './authReducer';
import { useMutation, useQuery } from '@apollo/client';
import { M_NEWUSUARIO, M_LOGINUSUARIO } from '../interfaces/mutation';
import { getUsuarioJWT } from '../helpers/jwToken';
import Cookies from 'js-cookie';

interface AuthProps {
    isLoggedIn: boolean;
    user?: IUser;
    registrar:(data:IRegistro)=>Promise<IMsg>,
    logins:(data:ILogin)=>Promise<IMsg>,
    slugs:()=>any
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
            
              const usuario:any=await getUsuarioJWT(token,1)
              if (usuario.id) {
                  dispatch({type:"Login",payload:usuario})
                  Cookies.set('token',token)
                }
                console.log(state.isLoggedIn)
                return {estado:'1',valor:'Buena compra'}as IMsg
          } catch (error:any) {
            return {estado:'0',valor:error.message}as IMsg
          }
     }
     const slugs=async()=>{
        const {data,loading}=useQuery(Q_SLUGS)
        const lista:any=await data.getProducSlug;

        return lista
     }
     

    return (
        <AuthContext.Provider
        value={{
            ...state,
            registrar,
            logins,slugs
        }}>
        {children}
        </AuthContext.Provider>
    );
}

