import Products from '../models/Product.js'

//logic for the role controller
export const createProduct = async (req, res, next) => {
        const newProducts = new Products({
            itemName: req.body.itemName,
            amount: req.body.amount,
            companyName: req.body.companyName,
            city: req.body.city,
            address: req.body.address,
            productImage: req.body.productImage
        });
    
        await newProducts.save()
        res.status(200).send("Product Created Successfully");
}

//logic for the role update controller

export const updateProduct = async (req, res, next)=> {
    try {
        const product = await Products.findById({_id: req.params.id});

        if(product){
            const newDate = await Products.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
            )
            return res.status(200).json(newDate)
        }

        else{
            return res.status(404).json({message: "Product not found"})
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

//logic to get all the roles

export const getAllProducts = async (req, res, next) => {

    try {
        const products = await Products.find({})
        res.status(200).send(products)
    
    } catch (error) {
    
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Products.findByIdAndDelete({ _id: req.params.id });

        if (product) {
            await Products.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: 'Product deleted successfully' })
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}