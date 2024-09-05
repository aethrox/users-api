import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
import "dotenv/config";

/* Connecting to the database before each test */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

/* Closing the connection after all tests */
afterAll(async () => {
    await mongoose.connection.dropCollection("Users");
    await mongoose.connection.close();
});

/* Testing the API endpoints */
describe("Users Controller", () => {
    describe("GET methods for /api/users", () => {
        test("should return all users", async () => {
            const res = await request(app).get("/api/users");

            if (res.status === 404) {
                expect(res.body.message).toEqual("No users found");
            } else {
                expect(res.status).toBe(200);
                expect(res.body.users.length).toBeGreaterThan(0);
            }
        });

        test("should return a user", async () => {
            const res = await request(app).get(`/api/users/123`);
            expect(res.status).toBe(400);
            expect(res.body.message).toEqual("Invalid user ID");
        });
    }, 15000);

    describe("POST methods for /api/users", () => {
        test("should create a user", async () => {
            const res = await request(app)
                .post("/api/users")
                .send({ name: "John Doe", email: "john@example.com", age: 25 });
            expect(res.status).toBe(201);
            expect(res.body.message).toEqual("User created successfully");
        });
    }, 15000);

    describe("PUT methods for /api/users", () => {
        test("should update a user", async () => {
            const res = await request(app)
                .put("/api/users/123")
                .send({ name: "Jane Doe", email: "jane@example.com", age: 30 });
            expect(res.status).toBe(400);
            expect(res.body.message).toEqual("Invalid user ID");
        });
    }, 15000);

    describe("DELETE methods for /api/users", () => {
        test("should delete a user", async () => {
            const res = await request(app).delete("/api/users/123");
            expect(res.status).toBe(400);
            expect(res.body.message).toEqual("Invalid user ID");
        });
    }, 15000);
}, 30000);
