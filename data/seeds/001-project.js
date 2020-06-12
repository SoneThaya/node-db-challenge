
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'office', description: 'clean', completed: 0, resource_id: 1},
        { name: 'office', description: 'style', completed: 0, resource_id: 2 },
        { name: 'bathroom', description: 'clean', completed: 0, resource_id: 3 },
        {name: 'bathroom', description: 'style', completed: 0, resource_id: 4},
      ]);
    });
};
