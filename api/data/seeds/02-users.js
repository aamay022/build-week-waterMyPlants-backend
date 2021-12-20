exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
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
      ]);
    });
};
