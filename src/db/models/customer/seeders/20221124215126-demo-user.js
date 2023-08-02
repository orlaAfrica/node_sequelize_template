"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          firstName: "Julius",
          lastName: "Ngwu",
          email: "juliusczar.jc@gmail.com",
          roleId: 1,
          meta: JSON.stringify({ address: "12 babayemi" }),
          isBlocked: false,
          tokenIssueTime: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
