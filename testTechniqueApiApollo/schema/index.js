const {   gql } = require('apollo-server');
const typeDefs = gql`
  
 
type list {
  _id: ID
  titre: String
  elements:[element]
}
 
type element {
  _id: ID
  titre: String

}
 

input inputList{ 
  titre:String
  
} 
input elementInput{ 
  titre:String
  
} 
 
input inputElement{ 
  element:elementInput
  idList:String
 
} 
input inputElementDelete{ 
  _id:String
  idList:String
 
} 

type Query {
  getList: [list]
 
 
}
  type Mutation {
   addList(input: inputList!): list
   addElement(input: inputElement!): list
   deleteElement(input: inputElementDelete!): list

  
  }
`;

module.exports = typeDefs
