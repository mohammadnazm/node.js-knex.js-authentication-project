/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { username: "leo", password_hash: "leo_password" },
    { username: "mark", password_hash: "mark_password" },
    { username: "tom", password_hash: "tom_password" },
  ]);
};
