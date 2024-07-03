import { Knex } from "knex";

// !Description: table to record classes, (teacher), (students), subject given in detail 
// and whether there was support material, such as "slide", "work", "activities", "presentation"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('class_students', table => {
    table.increments('id').primary();

    table.integer('student_id')
      .notNullable()
      .references('rm')
      .inTable('students')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
    table.timestamp('date')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('class_students')
}
