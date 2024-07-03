import { Knex } from "knex";

// !Description: table for adopting grades (I, R, B, MB, Na)
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('grades', table => {
    table.increments('id').primary();
    table.string('value').notNullable();
    table.string('description').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('grades')
}
