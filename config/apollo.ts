import { ApolloClient, HttpLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import fetch from 'node-fetch';
import Cookies from 'js-cookie';

const httpLink=new HttpLink({
    uri:"http://localhost:3000/api/graphql"
})
const authLink=setContext((_:any,{headers}:any)=>{
    const token=Cookies.get('token')
    return {
       headers:{ ...headers,
        authorization:token ?`Bearer ${token}`:''}
    }
})
const apollo=new ApolloClient({
    cache:new InMemoryCache(),
    link :authLink.concat(httpLink)
})

export default apollo;