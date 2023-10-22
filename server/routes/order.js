const router = require('express').Router();
const order = require("../controllers/order")

router.get("/", order.getOrder)

module.exports = router