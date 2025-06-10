import express from 'express'
import {createHire,  getAllHires, deleteHire} from '../controllers/hires.controller.js'

// import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()

//create a new Hire
router.post('/create-hire' , createHire)

//get all Hires
router.get('/getAll-hires', getAllHires)

//delete a Hire
router.delete('/delete-hires/:id', deleteHire)

export default router;