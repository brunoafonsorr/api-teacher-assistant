import { Knex } from "knex";

// !Description: table for adopting student points
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('score', table => {
    table.increments('id').primary();

    table.integer('student_rm')
      .notNullable()
      .references('rm')
      .inTable('students')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('subject_id')
      .notNullable()
      .references('id')
      .inTable('subjects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('grade_id')
      .notNullable()
      .references('id')
      .inTable('grades')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('date')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('score')
}
