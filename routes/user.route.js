import { Router } from "express";
import { getAllUser, getOneUser, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User operations
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: "Get all users"
 *     description: "Get all users from the database"
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: "Successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "2 users found"
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "john@example.com"
 *                       age:
 *                         type: number
 *                         example: 30
 *             examples:
 *               example:
 *                 value:
 *                   message: "2 users found"
 *                   users:
 *                     - name: "John Doe"
 *                       email: "john@example.com"
 *                       age: 30
 *                     - name: "Jane Doe"
 *                       email: "jane@example.com"
 *                       age: 28
 */
router.get("/users", getAllUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: "Get a user"
 *     description: "Get a user from the database"
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User found"
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       example: "john@example.com"
 *                     age:
 *                       type: number
 *                       example: 30
 *             examples:
 *               example:
 *                 value:
 *                   message: "User found"
 *                   user:
 *                     name: "John Doe"
 *                     email: "john@example.com"
 *                     age: 30
 */
router.get("/users/:id", getOneUser);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: "Create a user"
 *     description: "Create a user in the database"
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                type: string
 *                example: "john@example.com"
 *               age:
 *                 type: number
 *                 example: 30
 *     responses:
 *       201:
 *         description: "Successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully."
 *                 userID:
 *                   type: string
 *                   example: "5f4e3f7b7e5e4b0017f0b3b1"
 */
router.post("/users", createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: "Update a user"
 *     description: "Update a user in the database"
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                type: string
 *                example: "john@example.com"
 *               age:
 *                 type: number
 *                 example: 30
 *     responses:
 *       200:
 *         description: "Successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User updated successfully."
 *                 userID:
 *                   type: string
 *                   example: "5f4e3f7b7e5e4b0017f0b3b1"
 */
router.put("/users/:id", updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: "Delete a user"
 *     description: "Delete a user from the database"
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "User ID"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully."
 *                 userID:
 *                   type: string
 *                   example: "5f4e3f7b7e5e4b0017f0b3b1"
 */
router.delete("/users/:id", deleteUser);

export default router;
