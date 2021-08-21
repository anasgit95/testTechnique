const axios = require('axios');

const resolvers = {

  Query: {
    getList: async (args) => {
      try {
      const res  = await axios.get('http://localhost:3005/list')
         return(res.data)
       
       } catch (error) {
        logger.error(error);
        return error.message;
      }
    },

 
  },
  Mutation: {
    addList: async (root, args, { user }) => {
      try {
         const res  = await axios.post('http://localhost:3005/list',args.input)

           return(res.data)
         
         } catch (error) {
          logger.error(error);
          return error.message;
        }
    },
    addElement: async (root, args, { user }) => {
      try {
          const res  = await axios.put('http://localhost:3005/list/'+args.input.idList,args.input)
           return(res.data)
         
         } catch (error) {
          logger.error(error);
          return error.message;
        }
    },
    deleteElement: async (root, args, { user }) => {
      try {
          const res  = await axios.delete('http://localhost:3005/list/'+args.input.idList+"/"+args.input._id)
            return(res.data)
         
         } catch (error) {
          logger.error(error);
          return error.message;
        }
    },

    
    
   
    
     
   },
};
module.exports = resolvers;
