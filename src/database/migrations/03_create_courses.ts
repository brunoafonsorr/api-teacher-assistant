import { Knex } from "knex";

// !Description: table to record courses, such as "administration", "HR"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('courses', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('courses')
}
