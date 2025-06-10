import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true,
    },

    companyName: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    productImage: {
        type: String,
        required: false,
    },
    
},
{
    timestamps: true
}
)

export default mongoose.model('products', ProductSchema);




