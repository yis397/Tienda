import { DocumentNode, useQuery,useMutation } from '@apollo/client';



interface Query{
    tipo:string,
    gql:DocumentNode,

}

const useGraph=({tipo,gql}:Query)=> {

    if (tipo=="m") {
        const [mutation]=useMutation(gql)
        return {mutation}
    }else{
        const {data,loading,error}=useQuery(gql)
        return {data,loading,error}
    }
    
}

export default useGraph;

