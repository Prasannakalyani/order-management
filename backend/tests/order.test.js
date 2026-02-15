const request = require("supertest");
const app = require("../server");
const { connectDB, closeDB } = require("./setup");

jest.mock("../utils/orderStatusSimulator", () => jest.fn());

let orderId;

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe("Order API", () => {
  test("should create order successfully", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer: {
          name: "John",
          address: "India",
          phone: "1234567890"
        },
        items: [
          { name: "Pizza", price: 200, quantity: 2 }
        ]
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("orderId");

    orderId = res.body.orderId;
  });


  test("should fail if items empty", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer: {
          name: "John",
          address: "India",
          phone: "1234567890"
        },
        items: []
      });

    expect(res.statusCode).toBe(400);
  });


  test("should get order details", async () => {
    const res = await request(app)
      .get(`/api/orders/${orderId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("totalAmount");
    expect(res.body).toHaveProperty("createdAt");
  });

  test("should get all orders", async () => {
    const res = await request(app)
      .get("/api/orders");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});