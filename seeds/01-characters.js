exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("characters")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("characters").insert([
        { characterName: "Lotus", class: "Mage" },
        { characterName: "Esther", class: "priest" },
      ]);
    });
};
