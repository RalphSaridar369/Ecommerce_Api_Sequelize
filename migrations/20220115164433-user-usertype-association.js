'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Users',{
      fields: ['userTypeId'],
      type: 'foreign key',
      name: 'user-usertype-association',
      references:{
        table:'UserTypes',
        field:'id',
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Users',{
      fields: ['userTypeId'],
      type: 'foreign key',
      name: 'user-usertype-association',
      references:{
        table:'UserTypes',
        field:'id',
      }
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
