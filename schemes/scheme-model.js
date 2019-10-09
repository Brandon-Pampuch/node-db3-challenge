const db = require("./dbConfig")

module.exports = {
    find,
    findById,
    findSteps,
    add
}


function find() {
    return db('schemes')
}
function findById(id) {
    return db('schemes').where('id', id)
}
function findSteps(id) {
    return (
        db('steps')
            .join('schemes', 'schemes.id', 'steps.scheme_id')
            .where({ scheme_id: id })
        // .select('scheme_name', "instructions")
    )
}
function add(scheme) {
    return (
        db('schemes')
            .insert({ scheme_name: scheme.scheme_name })
    )
}

