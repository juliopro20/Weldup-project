import express from 'express';
import {getAllClients, getClientById, deleteClient} from '../controllers/client.controller.js'
const router = express.Router()

//getting all the clients
router.get('/clients', getAllClients)

//get by id
router.get('/:id', getClientById)

//delete the client
router.delete('/delete/:id', deleteClient)

export default router;