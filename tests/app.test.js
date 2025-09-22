const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("should return success message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("CI/CD with GitHub Actions is working!");
  });
});
