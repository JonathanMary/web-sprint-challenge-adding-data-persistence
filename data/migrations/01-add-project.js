//  A **project** is what needs to be done and is stored in a `projects` table with the following columns:

// `project_id` - primary key
// `project_name` - required
// `project_description` - optional
// `project_completed` - the database defaults it to `false` (integer 0) if not provided */

exports.up = function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name').notNullable()
            table.string('project_description')
            table.boolean('project_completed').defaultTo(false)
        })
}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
}