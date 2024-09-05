import User from "../models/user.model.js";
import mongoose from "mongoose";

// Utils
const validateEmail = (email) => email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? true : false;

async function getAllUser(req, res) {
    try {
        const users = await User.find({});

        if (users.length === 0) {
            res.status(404).json({ message: "No users found" });
            return;
        }

        res.status(200).json({ message: `${users.length} users found`, users });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({ message: "User found", user });
    }
    catch (err) {
        if (err instanceof mongoose.Error.CastError) {
            res.status(400).json({ message: "Invalid user ID" });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}

async function createUser(req, res) {
    try {
        if (!validateEmail(req.body.email)) {
            res.status(400).json({ message: "Invalid email" });
            return;
        }
        
        const user = await User.create(req.body);

        res.status(201).json({ message: "User created successfully", userID: user._id });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ message: "Email already exists" });
        } else if (err instanceof TypeError) {
            res.status(400).json({ message: "Invalid user data" });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}

async function updateUser(req, res) {
    try {
        if (!validateEmail(req.body.email)) {
            res.status(400).json({ message: "Invalid email" });
            return;
        }

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({ message: "User updated successfully", userID: user._id });
    } catch (err) {
        if (err instanceof mongoose.Error.CastError){
            res.status(400).json({ message: "Invalid user ID" });
        } else if (err instanceof TypeError) {
            res.status(400).json({ message: "Invalid user data" });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "User deleted successfully", userID: user._id });
    } catch (err) {
        if (err instanceof mongoose.Error.CastError){
            res.status(400).json({ message: "Invalid user ID" });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}

export { getAllUser, getOneUser, createUser, updateUser, deleteUser };
