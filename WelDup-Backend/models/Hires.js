import mongoose from 'mongoose'

const WelderHiringWelderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    
},
{
    timestamps: true
}
)

export default mongoose.model('werders-hiring-data', WelderHiringWelderSchema);




