const List = require("./../models/list.schema");
 
exports.createList = async (req, res) => {
 
  try {
      
      const listResponse = await List.create({ ...req.body  });
      console.log(listResponse) 
   
        res.send(listResponse);
  } catch (error) {
    console.log("error", error.message);
    res.status(400).end();
  }
};

exports.updateElement = async (req, res) => {
  try {
    const doc = await List.findOneAndUpdate(
        { _id: req.params._id },
        { $push: { elements: req.body.element } },
        { new: true }
        );
        console.log(doc)
        res.send(doc)
    
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteElement = async (req, res) => {
    try {
        console.log(req.body)
        const doc = await List.findOneAndUpdate(
            { _id: req.params._id },
            { $pull: { "elements" : {  _id: req.params._idElement  } } },
             { new: true }
            );
                res.send(doc)
        
      } catch (error) {
        console.log(error.message);
      }
};
 


exports.getAllList = async (req, res) => {
  
  try {
    const lists  =  await List.find({});
    console.log(lists)
    res.send(lists);
  } catch (e) {
    console.log(e);
    // res.status(400).end()
  }
};

 