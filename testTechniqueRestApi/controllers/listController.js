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
        const doc = await List.findOneAndUpdate(
            { _id: req.params._id },
            { $pull: { "elements" : {  _id: req.body._id  } } },
             { new: true }
            );
            console.log(doc)
            res.send(doc)
        
      } catch (error) {
        console.log(error.message);
      }
};
 


exports.getAllList = async (req, res) => {
  //   const start = Number(req.query._start) || 0;
  //   const end = Number(req.query._end) || 0;
  //   const limit = end - start;

  try {
    // const length = await Order.count({});
    // const docs = await Livraison.find({}, { _id: 1, bl: 1, startDate: 1, status: 1, })
    //   // .populate('listOrders.listmeal', { title: 1, mealType: 1 })
    //   .lean()
    //   .sort({ "startDate": 1 })
    //   .exec();
    // res.set("X-Total-Count", length);

    res.send(true);
  } catch (e) {
    console.log(e);
    // res.status(400).end()
  }
};

 