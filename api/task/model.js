// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
          .join('projects', 'tasks.project_id', 'projects.project_id')
}

const getById = (id) => {
    return db('tasks').where('task_id', id).first()
}
const add = async (body) => {
    const [id] = await db('tasks').insert(body)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    add,
}