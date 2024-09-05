import User from "../models/user.model.js";

// Utils
const validateID = (id) => id.length === 24 && id.match(/^[0-9a-fA-F]+$/) ? true : false;
const validateEmail = (email) => email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? true : false;

async function getAllUser(req, res) {
    try {
        const users = await User.find();

        if (!users || users.length === 0) {
            res.status(404).json({ message: "No user found" });
        }

        res.status(200).json({ message: `${users.length} users found`, users });
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!validateID(req.params.id)) {
            res.status(400).json({ message: "Invalid user ID" });
        }

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User found", user });
    } catch (err) {
        res.status(500).send(err);
    }
}

async function createUser(req, res) {
    try {
        const user = await User.create(req.body);

        if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "Invalid user data" });
        }

        if (!validateEmail(req.body.email)) {
            res.status(400).json({ message: "Invalid email" });
        }

        if (!user) {
            res.status(400).json({ message: "User not created" });
        }

        res.status(201).json({ message: "User created successfully", userID: user._id });
    } catch (err) {
        res.status(500).send(err);
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!validateID(req.params.id)) {
            res.status(400).json({ message: "Invalid user ID" });
        } else if (!req.body || Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "Invalid user data" });
        } else if (!validateEmail(req.body.email)) {
            res.status(400).json({ message: "Invalid email" });
        }

        if (!user) {
            res.status(400).json({ message: "User not updated" });
        }

        res.status(200).json({ message: "User updated successfully", userID: user._id });
    } catch (err) {
        res.status(500).send(err);
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!validateID(req.params.id)) {
            res.status(400).json({ message: "Invalid user ID" });
        }

        if (!user) {
            res.status(400).json({ message: "User not deleted" });
        }

        res.status(200).json({ message: "User deleted successfully", userID: user._id });
    } catch (err) {
        res.status(500).send(err);
    }
}

export { getAllUser, getOneUser, createUser, updateUser, deleteUser };