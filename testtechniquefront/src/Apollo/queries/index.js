import gql from "graphql-tag";
 
export const GET_LIST = gql`
query getList{
    getList{
        titre
        _id
        elements {
          _id
          titre
        }
      }  
  }
`


