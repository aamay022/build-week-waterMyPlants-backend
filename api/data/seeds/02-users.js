exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: "jax",
      password: "123",
    },
    {
      username: "max",
      password: "123",
    },
    {
      username: "fax",
      password: "123",
    },
    {
      username: "doug",
      password: "123",
    },
  ])
}