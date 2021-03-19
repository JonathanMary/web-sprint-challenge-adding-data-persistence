// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const getById = (id) => {
    return db('projects').where('project_id', id).first()
}
const add = async (body) => {
    const [id] = await db('projects').insert(body)
    return getById(id)
}

const getTasks = (id) => {
    return db('projects')
        .join('tasks', 'tasks.project_id', 'projects.project_id')
        .where('projects.project_id', id)
}

module.exports = {
    getAll,
    getById,
    add,
    getTasks,
}