exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
      //phonenumber
    })
    .createTable("plants", (plants)=>{
      plants.increments("plants_id");
      plants.string('nickname',200).notNullable();
      plants.string('species',200).notNullable();
      plants.string('image')
      plants.integer('user_id')
      .references('id')
      .inTable('users')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('plants');
  await knex.schema.dropTableIfExists('users');
}
