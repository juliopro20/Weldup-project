import express from 'express';
import {getAllCompany, deleteCompany} from '../controllers/company.controller.js'
const router = express.Router()

//getting all the company
router.get('/companies', getAllCompany)

//get by id
router.delete('/delete/:id', deleteCompany)

export default router;