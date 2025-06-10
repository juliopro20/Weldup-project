import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    }
},{
    timestamps: true
}

);

const Role = mongoose.models.Role || mongoose.model('Role', RoleSchema);

export default Role;