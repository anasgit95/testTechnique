const {   gql } = require('apollo-server');
const typeDefs = gql`
  
 
type list {
  _id: ID
  Titre: String
  elements:[element]
}
 
type element {
  _id: ID
  Titre: String

}
 

input inputList{ 
  titre:String
  idList:String
 
} 

 

type Query {
  getList: [list]
 
 
}
  type Mutation {
   addList(input: inputList): list
  
  }
`;

module.exports = typeDefs
