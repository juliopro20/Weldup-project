import express from 'express';
import {registerClient, loginClient, registerCompany, loginCompany, loginAdmin, registerAdmin} from '../controllers/auth.controller.js';
const router = express.Router();


/*************Client********/
//register
router.post('/register-client', registerClient)

//login
router.post('/login-client', loginClient);


/*************Company********/
//register
router.post('/register-company', registerCompany)

//login
router.post('/login-company', loginCompany);


//register as Admin
router.post('/register-admin', registerAdmin)
router.post('/login-admin', loginAdmin)

export default router;