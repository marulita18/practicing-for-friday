"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Lucia Domingues",
          email: "luli@gmail.com",
          phone: 1133322331,
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tass Xav",
          email: "tass@gmail.com",
          phone: 11334,
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sere Qui",
          email: "sere@gmail.com",
          phone: 11322,
          password: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
