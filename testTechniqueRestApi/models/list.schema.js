const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");
var  element =  require ( './element.schema')
const listSchema = new mongoose.Schema(
  { 
    title: { type: String, unique: true },


     elements :[element]

  },
  { timestamps: true }
);
listSchema.plugin(mongoose_delete);
 
const list = mongoose.model("list", listSchema);
 
module.exports = list;
