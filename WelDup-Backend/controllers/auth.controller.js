import Client from '../models/Client.js';
import Company from '../models/Company.js';
import Admin from '../models/Admin.js';
import Role from '../models/role.js';
import jwt from 'jsonwebtoken'; //importing jsonwebtoken for token generation
import bcrypt from 'bcryptjs'//importing bcryptjs for hashing passwords

//Cleint registration
export const registerClient = async (req, res, next) => {
    const role = await Role.find({role: 'Client'})
     
    //hashing the password
    const salt = await bcrypt.genSalt(10); // Generate a salt for hashing
    const hashPassword = await bcrypt.hash(req.body.password, salt); // Hash the password
 
    const newClient = new Client({
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashPassword,
        city: req.body.city,
        address: req.body.address,
        role: role
    });

    await newClient.save()
    res.status(200).json({ message: "User Register Successfully" });
}   

export const loginClient = async (req, res, next) => {
    try {
        const client = await Client.findOne({email: req.body.email}).populate('role', 'role'); // Populate the role field
        const role = client
        if (!client) {
            return res.status(404).json({message: "User not found"});
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, client.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        //using the jsnwebtoken for access granting
        const token = jwt.sign(
            {id: client._id, isAdmin: client.isAdmin, role: role},
            process.env.JWT_SECRET, // Use your secret key from environment variables
        )

        res.cookie('access_token', token, { httpOnly: true})
        .status(200)
        .json({
            status: 200,
            message: "Login Successful",
            data: client       
        })
        
    } catch (error) {
       return res.status(500).send('Something went wrong') 
    }
}



//Company registration...

export const registerCompany = async (req, res, next) => {
    const role = await Role.find({role: 'Company'})

    //hashing the password
    const salt = await bcrypt.genSalt(10); // Generate a salt for hashing
    const hashPassword = await bcrypt.hash(req.body.password, salt); // Hash the password
 
    const newCompany = new Company({
        companyName: req.body.companyName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashPassword,
        city: req.body.city,
        address: req.body.address,
        role: role
    });

    await newCompany.save()
    res.status(200).json({ message: "User Register Successfully" });
}   


export const loginCompany = async (req, res, next) => {
    try {
        const company = await Company.findOne({email: req.body.email}).populate('role', 'role'); // Populate the role field
        const role = company
        if (!company) {
            return res.status(404).json({message: "User not found"});
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, company.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        //using the jsnwebtoken for access granting
        const token = jwt.sign(
            {id: company._id, isAdmin: company.isAdmin, role: role},
            process.env.JWT_SECRET, // Use your secret key from environment variables
        )

        res.cookie('access_token', token, { httpOnly: true})
        .status(200)
        .json({
            status: 200,
            message: "Login Successful",
            data: company      
        })
        
    } catch (error) {
       return res.status(500).send('Something went wrong') 
    }
}


// admin 

//Cleint registration
export const registerAdmin = async (req, res, next) => {
    const role = await Role.find({role: 'Admin'})
       
    //hashing the password
    const salt = await bcrypt.genSalt(10); // Generate a salt for hashing
    const hashPassword = await bcrypt.hash(req.body.password, salt); // Hash the password
 
    const newAdmin = new Admin({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashPassword,
        pin: req.body.pin,
        role: role
    });

    await newAdmin.save()
    res.status(200).json({ message: "User Register Successfully" });
}   

export const loginAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({email: req.body.email}).populate('role', 'role'); // Fixed: use findOne instead of find
        
        if (!admin) {
            return res.status(404).json({message: "You are Not Admin"});
        }

        // Verify password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, admin.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        // Verify PIN
        if (!req.body.pin) {
            return res.status(400).json({message: "PIN is required"});
        }

        // Check if PIN matches (assuming PIN is stored as plain text or hashed)
        if (admin.pin !== req.body.pin) {
            return res.status(400).json({message: "Invalid PIN"});
        }

        

        // Using the jsonwebtoken for access granting
        const token = jwt.sign(
            {id: admin._id, isAdmin: admin.isAdmin, role: admin.role}, // Fixed: use admin.role instead of role variable
            process.env.JWT_SECRET, // Use your secret key from environment variables
        )

        res.cookie('access_token', token, { httpOnly: true})
        .status(200)
        .json({
            status: 200,
            message: "Login Successful",
            data: {
                id: admin._id,
                email: admin.email,
                isAdmin: admin.isAdmin,
                role: admin.role
                // Don't send password or PIN in response
            }      
        })
        
    } catch (error) {
       console.error('Login error:', error);
       return res.status(500).json({message: 'Something went wrong'});
    }
}
