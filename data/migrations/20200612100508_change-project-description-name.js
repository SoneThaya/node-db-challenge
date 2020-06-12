
exports.up = function(knex) {
  return knex.schema.table('project', tbl => {
    tbl.renameColumn('description', 'desc')
  })
};

exports.down = function(knex) {
  return knex.schema.table('project', tbl => {
    tbl.string('name');
})
};
