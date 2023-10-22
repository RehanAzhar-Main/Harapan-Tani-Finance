const router = require('express').Router();
const warehouse = require("../controllers/warehouse")

router.get("/",warehouse.getWarehouse)

module.exports = router