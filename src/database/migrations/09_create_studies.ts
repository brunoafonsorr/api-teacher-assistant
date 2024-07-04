import { Knex } from "knex";

// !Description: n:n relationship table to record which (student) is in which (course), along with the "module"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('studies', table => {
    table.increments('id').primary();

    table.integer('student_id')
      .notNullable()
      .references('rm')
      .inTable('students')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('course_id')
      .notNullable()
      .references('id')
      .inTable('courses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
    table.integer('currentModule').notNullable()
    table.integer('totalModule').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('studies')
}
