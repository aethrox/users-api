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
    await mongoose.connection.close();
});

/* Testing the API endpoints */
describe("GET /api/users", () => {
    let cachedUser = null;
    test("should return all users", async () => {
        const res = await request(app).get("/api/users");
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test("should return a user", async () => {
        const res = await request(app).get("/api/users/66d43af73636b85b444e9457");
        expect(res.status).toBe(200);
        expect(res.body._id).toEqual("66d43af73636b85b444e9457");
    });

    test("should create a user", async () => {
        const res = await request(app)
            .post("/api/users")
            .send({ name: "John Doe", email: "john@aethrx.com", age: 25 });
        expect(res.status).toBe(201);
        expect(res.body.name).toEqual("John Doe");
        cachedUser = res.body;
    });

    test("should update a user", async () => {
        const res = await request(app)
            .put(`/api/users/${cachedUser._id}`)
            .send({ name: "Jane Doe", email: "jane@aethrx.com", age: 30 });
        expect(res.status).toBe(200);
        expect(res.body.name).toEqual("Jane Doe");
        cachedUser = res.body;
    });

    test("should delete a user", async () => {
        const res = await request(app).delete(`/api/users/${cachedUser._id}`);
        expect(res.status).toBe(200);
        expect(res.body._id).toEqual(cachedUser._id);
        cachedUser = null;
    });
});

