const resolvers = require('./resolvers')
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema')
 

 const server = new ApolloServer({ typeDefs, resolvers 
   
    
  

});



server.listen({ port: 4008 }, () =>
  console.log(` Server ready at http://localhost:4008${server.graphqlPath}
  Subscriptions ready at http://localhost:4008${server.subscriptionsPath}`)
);