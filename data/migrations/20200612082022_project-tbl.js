
exports.up = function (knex) {
  return knex.schema.createTable('project', tbl => {
    tbl.increments()
    tbl.string('name', 255).notNullable().index()
      
    tbl.string('description', 255)
    
    tbl.boolean('completed')
      .notNullable()
      .defaultTo(0)
    
    tbl.integer('resource_id')
      .unsigned()
      .references('resource.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
    
    .createTable('resource', tbl => {
      tbl.increments()
      tbl.string('name', 255).notNullable().index()
      tbl.string('description', 255)
    })

    .createTable('task', tbl => {
      tbl.increments()
      tbl.string('description', 255)
        .notNullable()
        
      tbl.string('notes', 255)

      tbl.integer('project_id')
        .unsigned()
        .references('project.id')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(0)
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
}