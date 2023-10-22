const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  id : mongoose.Types.ObjectId,
  production_id : String,
  order_date : Date,
  pickup_date : Date,
  status: String,
  total:String,
  description : String,
  employee_id : String,
}) 


module.exports = mongoose.model("order", OrderSchema)