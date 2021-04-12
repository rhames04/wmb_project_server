"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Employees", [
      {
        user: "Roger Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "Oscar Alho",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Employee", null);
  },
};
