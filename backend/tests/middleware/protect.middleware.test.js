import request from "supertest";
import express from "express";
import protect from "../../middleware/auth.js";
import jwt from "jsonwebtoken";

const app = express();

app.get("/protected", protect, (req, res) => {
  res.status(200).json({
    success: true
  });
});

describe("Protect Middleware", () => {

  test("❌ refuse accès si pas de token", async () => {

    const res = await request(app).get("/protected");

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);

  });

  test("❌ refuse si token invalide", async () => {

    const res = await request(app)
      .get("/protected")
      .set("Authorization", "Bearer invalidtoken");

    expect(res.statusCode).toBe(401);

  });

});