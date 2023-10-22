const router = require('express').Router();
const products = require("../controllers/product")



router.get("/products_and_services", products.getProducts)





module.exports = router