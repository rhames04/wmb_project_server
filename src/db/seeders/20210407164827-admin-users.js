"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Admins", [
      {
        user: "Jorge Augusto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "Ana Clara",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Admin", null);
  },
};
