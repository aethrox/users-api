import { Router } from "express";

import { getAllUser, getOneUser, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getAllUser);
router.get("/users/:id", getOneUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;