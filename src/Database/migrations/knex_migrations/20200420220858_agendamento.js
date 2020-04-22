exports.up = function (knex) {
  return knex.schema.createTable("agendamento", function (table) {
    table.increments().primary();
    table.date("data").notNullable();
    table.string("usuarioId").notNullable();

    table.string("barbeiroId").notNullable();
    table.foreign("barbeiroId").references("id").inTable("user");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("agendamento");
};
