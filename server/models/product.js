const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  id : mongoose.Types.ObjectId,
  production_id : String,
  production_date : Date,
  category : String,
  total : Number,
  available: Number,
  warehouse: String,
}) 


module.exports = mongoose.model("Product", ProductSchema)