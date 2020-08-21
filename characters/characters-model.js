const db = require("../data/db-config");

module.exports = {
  getCharacters,
  remove,
  findById,
  add,
};

function getCharacters(char) {
  return db("characters");
}

function remove(id) {
  return db("characters").where({ id }).del();
}

function findById(id) {
  return db("characters").where({ id }).first();
}

async function add(char) {
  return db("characters")
    .insert(char)
    .returning("id")
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}
