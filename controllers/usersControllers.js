import { User } from '../models/userModel.js'

export const allUsers = async (req,res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const singleUser = async (req,res) => {
   try{
    const { id } = req.params
    const user = await User.findById(id)

    if(!user){
       return res.status(404).json({message:"User Not Found."})
    }
    res.status(200).json(user)
   }catch(error){
    res.status(500).json({message:error.message})
   }
}

export const addUser = async (req,res) => {
    try {
        const { name, age, email } = req.body
        const newUser = new User({
            name,
            age,
            email
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const updateUser = async(req,res) => {
    try{
        const { id } = req.params
        const { name, age, email } = req.body
        const updateUser = await User.findByIdAndUpdate(id,{name,age,email},{new:true})
        if(!updateUser){
           return res.status(404).json({message:"User Not Found."})
        }
        res.status(200).json(updateUser)
    }catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({message:'User deleted successfully'});
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}