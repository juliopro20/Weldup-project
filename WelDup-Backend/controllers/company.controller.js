import Company from "../models/Company.js"

export const getAllCompany = async (req, res, next) =>{
    try {
        const companies = await Company.find()
       res.status(200).json({ 
            message: 'Companies fetched successfully',
            data: companies 
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export const deleteCompany = async (req, res)=>{
  try {
    const id = req.params.id
    let deletedCompany = await Company.deleteOne({_id: id})
    res.status(200).send(deletedCompany)
  } catch (error) {
    res.status(500).json({message: 'An error ocured', error: error})
  }
}