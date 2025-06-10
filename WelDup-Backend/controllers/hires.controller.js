import Hires from '../models/Hires.js'

//logic for the role controller
export const createHire = async (req, res, next) => {
        const newHire = new Hires({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            city: req.body.city,
            location: req.body.location,
        });
    
        await newHire.save()
        res.status(200).send("Hire Created Successfully");
}

//logic to get all the roles

export const getAllHires = async (req, res, next) => {

    try {
        const hires = await Hires.find({})
        res.status(200).send(hires)
    } catch (error) {
    
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

export const deleteHire = async (req, res, next) => {
    try {
        const hire = await Hires.findByIdAndDelete({ _id: req.params.id });

        if (hire) {
            await Hires.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Hired and deleted deleted successfully' })
        } else {
            res.status(404).json({ message: 'Hired not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}