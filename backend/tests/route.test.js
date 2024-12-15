// const request = require("supertest");
// const { MongoMemoryServer } = require("mongodb-memory-server");
// const mongoose = require("mongoose");
// const app = require("../server"); 

// let mongoServer;

// beforeAll(async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const mongoUri = mongoServer.getUri();
    
//   await mongoose.connect(mongoUri);
// });

// afterAll(async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await mongoServer.stop();
// });

// describe("Todo API Integration Tests", () => {
  
//   let todoId;

//   it("should create a new todo", async () => {
//     const response = await request(app)
//       .post("/api/todos")
//       .send({ title: "Test todo" });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("title", "Test todo");
//     todoId = response.body._id;
//   });


//   it("should get all todos", async () => {
//     const response = await request(app).get("/api/todo");

//     expect(response.status).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//     expect(response.body.length).toBeGreaterThan(0); // At least one todo should be present
//   });

  
//   it("should update a todo", async () => {
//     const response = await request(app)
//       .put(`/api/todo/${todoId}`)
//       .send({ task: "Updated task", completed: true });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("task", "Updated task");
//     expect(response.body).toHaveProperty("completed", true);
//   });

  
//   it("should delete a todo", async () => {
//     const response = await request(app).delete(`/api/todo/${todoId}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("message", "Todo deleted successfully");

    
//     const checkResponse = await request(app).get(`/api/todo/${todoId}`);
//     expect(checkResponse.status).toBe(404);
//   });
// });
