'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        name: 'Taro',
        pass: 'yamada',
        mail: 'taro@yamada.jp',
        age: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hanako',
        pass: 'flower',
        mail: 'hanako@flower.com',
        age: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jiro',
        pass: 'change',
        mail: 'jiro@change.com',
        age: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sachiko',
        pass: 'hamada',
        mail: 'sachiko@happy.jp',
        age: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};