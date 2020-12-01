const connection = require('./connection')

function getProfiles (db = connection) {
  return db('profiles').select()
}

function addProfile (person, db = connection) {
  return db('profiles').insert(person)
}

function deleteProfile (id, db = connection) {
  return db('profiles').where('id', id ).delete()
}

module.exports = {
  getProfiles,
  addProfile,
  deleteProfile
}
