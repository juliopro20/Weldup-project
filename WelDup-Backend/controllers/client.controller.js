import Client from "../models/Client.js"

export const getAllClients = async (req, res, next) =>{
    try {
        const clients = await Client.find()
        res.status(200).json({ 
            message: 'Clients fetched successfully',
            data: clients 
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const getClientById= async (req, res, next) =>{
    try {
        const client = await Client.findById(req.params.id);
        if(!client){
             res.status(404).send("User Not Found");
        }
        res.status(200).send("Single User", client);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const deleteClient = async (req, res)=>{
  try {
    const id = req.params.id
    let deletedClient = await Client.deleteOne({_id: id})
    res.status(200).send(deletedClient)
  } catch (error) {
    res.status(500).json({message: 'An error ocured', error: error})
  }
}