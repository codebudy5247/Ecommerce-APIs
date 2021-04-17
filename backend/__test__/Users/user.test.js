const app = require("../../server.js") // Link to your server file
const supertest = require("supertest")
const request = supertest(app);

describe("Testing the users API", () => {
  it("tests our testing framework if it works", () => {
    expect(2).toBe(2);
  });

  it("Gets the test endpoint", async (done) => {
    // Sends GET Request to /test endpoint
    const res = await request.get("/test");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("pass!");
    done();
  });
});
