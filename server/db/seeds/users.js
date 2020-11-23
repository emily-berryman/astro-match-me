const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('ian'),
      generateHash('orlando')
    ]))
    .then(([ianHash, orlandoHash]) =>
      knex('users').insert([
        { id: 1, profile_id: 1, username: 'Ian', hash: ianHash },
        { id: 2, profile_id: 2, username: 'Orlando', hash: orlandoHash }
      ])
    )
}