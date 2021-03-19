// build your `Resource` model here
const db = require('../../data/dbConfig')

const get = (id) => {
    let query = db('resources')
    if(id) {
        return query.where('resource_id', id).first()
    } else {
        return query
    }
}
const add = async (body) => {
    const [id] = await db('resources').insert(body)
    return get(id)
}

module.exports = {
    get,
    add,
}