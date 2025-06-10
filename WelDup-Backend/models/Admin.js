import mongoose, {Schema} from 'mongoose'

const AdminSchema = mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    pin: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    },

    role: {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: 'Role',//refering to the Role model
    }
    
},
{
    timestamps: true
}
)

export default mongoose.model('Admin', AdminSchema);