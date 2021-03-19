// A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

// `task_id` - primary key
// `task_description` - required
// `task_notes` - optional
// `task_completed` - the database defaults it to `false` (integer 0) if not provided
// `project_id` - required and points to an actual `project_id` in the `projects` table

exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', table => {
            table.increments('task_id')
            table.string('task_description').notNullable()
            table.string('task_notes')
            table.boolean('task_completed').defaultTo(false)
            table.boolean('project_id').references('project_id').inTable('projects')
        })
}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
}