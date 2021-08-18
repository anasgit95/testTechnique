const axios = require('axios');

const resolvers = {

  Query: {
    getList: async (args) => {
      try {
       await axios.get('https://api.covidtracking.com/v1/us/current.json')
        .then(response => {
          console.log(response)
         
        })
        .catch(error => {
          console.log("erro",error);
        });
        return [{
          Titre:"anas"
        }]
       } catch (error) {
        logger.error(error);
        return error.message;
      }
    },

 
  },
  Mutation: {
    addList: async (root, args, { user }) => {
      try {
        const { logo } = args.input
 
           return response;

       } catch (error) {
        console.log("error***", error)
        return error.message;
      }
    },

    
    
   
    
     
   },
};
module.exports = resolvers;
