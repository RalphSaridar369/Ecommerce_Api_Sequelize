'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Products',{
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'products-category-association',
      references:{
        table:'Categories',
        field:'id',
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Category', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Products',{
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'products-category-association',
      references:{
        table:'Categories',
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
