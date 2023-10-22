const router = require('express').Router();
const productRoute = require("./product")
const ordersRoute = require("./order")
const warehouseRoute = require("./warehouse")

router.use("/products", productRoute )
router.use("/order", ordersRoute )
router.use("/warehouse", warehouseRoute )

module.exports = router