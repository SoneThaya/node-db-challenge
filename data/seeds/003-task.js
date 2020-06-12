
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'head spin', notes: 'no notes', project_id: 1, completed: 0},
        { description: 'cart wheel', notes: 'yes notes', project_id: 1, completed: 0 },
        { description: 'back flip', notes: 'maybe notes', project_id: 2, completed: 0 },
        {description: 'cart wheel', notes: 'heck yeah', project_id: 2, completed: 0},
      ]);
    });
};
