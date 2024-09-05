import User from "../models/user.model.js";

const getAllUser =  async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: `${users.length} users found`, users });
    } catch (err) {
        res.status(500).send(err);
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ message: "User found", user });
    } catch (err) {
        res.status(500).send(err);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User created successfully", userID: user._id });        
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully", userID: user._id });
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully", userID: user._id });
    } catch (err) {
        res.status(500).send(err);
    }
}

export { getAllUser, getOneUser, createUser, updateUser, deleteUser };