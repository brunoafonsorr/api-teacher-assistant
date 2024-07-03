import { Knex } from "knex";

// !Description: table to record subjects, such as "mathematics", "marketing"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('subjects', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('subjects')
}
