import { Knex } from "knex";

// !Description: table for list of courses and subjects
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('courses_subjects', table => {
    table.increments('id').primary();
    table.string('name').notNullable() // "marketing imobiliário"

    table.integer('course_id')
      .notNullable()
      .references('id')
      .inTable('courses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('subject_id')
      .notNullable()
      .references('id')
      .inTable('subjects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('courses_subjects')
}
