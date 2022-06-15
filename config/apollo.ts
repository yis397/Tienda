import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';


const apollo=new ApolloClient({
    
    cache:new InMemoryCache(),
    link:new HttpLink({
        uri:"http://localhost:3000/api/graphql",
        
    })
})

export default apollo;