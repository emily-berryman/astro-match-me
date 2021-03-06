exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { id: 1, name: 'Ian', sign: 'Leo' },
        { id: 2, name: 'Orlando', sign: 'Aquarius'},
        { id: 3, name: 'Hortense', sign: 'Cancer'},
        { id: 4, name: 'Emily', sign: 'Aries'},
        { id: 5, name: 'Saskia', sign: 'Leo'},
        { id: 6, name: 'Jess', sign: 'Cancer'},
        { id: 7, name: 'Olivia', sign: 'Sagittarius'},
        { id: 8, name: 'Robbie', sign: 'Aquarius'},
        { id: 9, name: 'Strawberry', sign: 'Aries'},
        { id: 10, name: 'MattB', sign: 'Aries'},
        { id: 11, name: 'Gareth', sign: 'Virgo'},
        { id: 12, name: 'Wonderphil', sign: 'Aquarius'},
        { id: 13, name: 'Ollie', sign: 'Leo'},
        { id: 14, name: 'Alex', sign: 'Leo'},
        { id: 15, name: 'Corian', sign: 'Libra'},
        { id: 16, name: 'Adam', sign: 'Cancer'},
        { id: 17, name: 'Jesse', sign: 'Virgo'},
        { id: 18, name: 'Manu', sign: 'Taurus'},
      ])
    })
}