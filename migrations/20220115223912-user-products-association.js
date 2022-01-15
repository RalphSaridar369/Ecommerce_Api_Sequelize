'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Products',{
      fields: ['userId'],
      type: 'foreign key',
      name: 'user-products-association',
      references:{
        table:'Users',
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
    queryInterface.addConstraint('Products',{
      fields: ['userId'],
      type: 'foreign key',
      name: 'user-products-association',
      references:{
        table:'Users',
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
