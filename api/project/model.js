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

module.exports = {
    getAll,
    getById,
    add,
}