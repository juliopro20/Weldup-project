import express from 'express'
import {createProduct, updateProduct, getAllProducts, deleteProduct} from '../controllers/product.controller.js'

// import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router()

//create a new product
router.post('/create-product' , createProduct)//, verifyAdmin,

//update an existing products
router.put('/update-product/:id',  updateProduct)//verifyAdmin,

//get all products
router.get('/getAll-products', getAllProducts)

//delete a product
router.delete('/delete/:id', deleteProduct)

export default router;