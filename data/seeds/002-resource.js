
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'computer', description: 'dirty'},
        {name: 'computer', description: 'wipe'},
        {name: 'toilet', description: 'flush'},
        {name: 'sink', description: 'drain'},
        
      ]);
    });
};
