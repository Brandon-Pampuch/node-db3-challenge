const db = require("./dbConfig")

module.exports = {
    find,
    findById,
    findSteps,
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