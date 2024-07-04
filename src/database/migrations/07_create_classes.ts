import { Knex } from "knex";

// !Description: table to record classes, (teacher), (students), subject given in detail 
// and whether there was support material, such as "slide", "work", "activities", "presentation"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.string('content').notNullable();

    table.integer('teacher_id')
      .notNullable()
      .references('rm')
      .inTable('teachers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('curse_subject_id')
      .notNullable()
      .references('id')
      .inTable('courses_subjects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('date')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('classes')
}
