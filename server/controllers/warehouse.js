const { default: mongoose } = require("mongoose")
const Warehouse = require("../models/warehouse");

const getWarehouse = async (req, res) => {
    try {
      let keyword = req.query.keyword
      let data
  
  
    //   if (keyword) {
    //     data = await Product.find({ "title": { $regex: '.*' + keyword + '.*' } })
    //   }else{
        data = await Warehouse.find();
    //   }
  
  
      res.json({
        message: "Success get data",
        data: data ?? [],
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  
  module.exports = { getWarehouse };