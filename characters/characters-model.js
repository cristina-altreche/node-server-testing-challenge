const db = require('../data/db-config')

module.exports = {
    getCharacters
}

function getCharacters(char) {
    return db('characters')
}