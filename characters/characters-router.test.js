const request = require("supertest");
const server = require("../app/server");
const db = require("../data/db-config");

describe("characters router", function () {
  it("should run the tests", function () {
    expect(true).toBe(true);
  });
});

/// SHOULD RESPOND WITH 200
describe("GET /api/characters", function () {
  it("should respond with status 200", function () {
    return request(server)
      .get("/api/characters")
      .then((res) => {
        expect(res.status).toBe(200); //CHANGE TO SEE ERROR
      });
  });
/// SHOULD RETURN AN ARRAY 
  it("should return an array of characters", function () {
    return request(server)
      .get("/api/characters")
      .then((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});

/// ABLE TO POST CHARACTER
describe("characters router", () => {
    beforeEach(async () =>{
        // empty table and reset primary key back to 1
        await db("characters").truncate();
    })
    describe("POST /api/characters", () => {
        it("should add character", async () => {
            const res = await request(server).post("/api/characters").send({
                characterName: "Esther",
                class: "Mage"
            });

            const characters = await db("characters");

            expect(characters).toHaveLength(1);

            expect(res.status).toBe(201)

        })
    })


/// ABLE TO DELETE CHARACTER 
describe("DELETE /api/characters/:id", () => {
  it("should delete character", async () => {
    await request(server).post("/api/characters").send({
      characterName: "Esther",
      class: "Paladin"
    });

    const res = await request(server).delete("/api/characters/1").send();

    const characters = await db("characters");

    expect(characters).toHaveLength(0);

    expect(res.status).toBe(204);
  });
})
})
