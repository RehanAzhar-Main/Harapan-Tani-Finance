const mongoose = require('mongoose');

const WarehouseSchema = mongoose.Schema({
  id : mongoose.Types.ObjectId,
  name : String,
  address : String,
  description : String,
}) 


module.exports = mongoose.model("warehouse", WarehouseSchema)