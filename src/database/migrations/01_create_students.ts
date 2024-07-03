import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('students', table => {
    table.increments('rm').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('password').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('students')
}
