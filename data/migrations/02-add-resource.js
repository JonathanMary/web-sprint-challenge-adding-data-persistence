// A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

// `resource_id` - primary key
// `resource_name` - required and unique
// `resource_description` - optional

exports.up = function (knex) {
    return knex.schema
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name').notNullable().unique()
            table.string('resource_description')
        })
}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
}