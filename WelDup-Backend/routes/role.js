import express from 'express'
import {createRole, updateRole, getAllRoles, deletRole} from '../controllers/role.controller.js'
// import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router()

//create a new role
router.post('/create' , createRole)//, verifyAdmin,

//update an existing role
router.put('/update/:id',  updateRole)//verifyAdmin,

//get all roles
router.get('/getAll', getAllRoles)

//delet a role
router.delete('/delete/:id', deletRole)

export default router;