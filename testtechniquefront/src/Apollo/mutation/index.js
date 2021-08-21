import gql from "graphql-tag";

export const AddList = gql`
mutation addList($input:  inputList!){
    addList(input:$input){
        titre
        _id
        elements {
          _id
          titre
        }
    }    
  }
`
export const AddElement = gql`
mutation addElement($input:  inputElement!){
    addElement(input:$input){
        titre
        _id
        elements {
          _id
          titre
        }
    }    
  }
`

export const DeleteElement = gql`
mutation deleteElement($input:  inputElementDelete!){
    deleteElement(input:$input){
        titre
        _id
        elements {
          _id
          titre
        }
    }    
  }
`