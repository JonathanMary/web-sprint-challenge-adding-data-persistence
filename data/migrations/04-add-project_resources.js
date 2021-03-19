// A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

exports.up = function (knex) {
    return knex.schema
        .createTable('project_resources', table => {
            table.increments('project_resources_id')
            table.integer('project_id')
                .references('project_id')
                .inTable('projects')
                .notNullable()
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.integer('resource_id')
                .references('resource_id')
                .inTable('resources')
                .notNullable()
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
}