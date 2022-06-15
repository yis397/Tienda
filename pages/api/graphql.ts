import { ApolloServer } from "apollo-server-micro";
import conectarDB from "../../config/db";
import dotenv from "dotenv";
import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";
import { getUsuarioJWT } from '../../helpers/jwToken';
import Cors from 'micro-cors'

const cors=Cors();
dotenv.config()

conectarDB();


const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>{
        const token = req.headers['authorization'] || '';
        try {
            const usuario=getUsuarioJWT(token);
            return{
                usuario
            }
        } catch (error) {
        }
    }
})
const startServer=server.start();

export default cors(async function handler(req,res){
    if(req.method=='OPTIONS'){
        res.end()
        return false;
    }
   await startServer;
   await server.createHandler({
    path: '/api/graphql'
   })(req,res)
})

export const config ={
    api:{
        bodyParser:false
    }
}
