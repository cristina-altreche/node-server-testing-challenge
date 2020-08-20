exports.up = function (knex) {
  return knex.schema.createTable("characters", (tbl) => {
    tbl.increments();
    tbl.string("characterName").unique().notNullable();
    tbl.string("class").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("characters");
};
