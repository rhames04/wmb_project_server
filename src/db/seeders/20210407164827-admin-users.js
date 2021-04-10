"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Admins", [
      {
        user: "Rhames Lima",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "Wanessa Cataldo",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Admin", null);
  },
};
