'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Airports',
    {
      type:'FOREIGN KEY',
      fields:['CityId'],
      name:'city_fkey_constraint',
      references:{
        table:'Cities',
        field:'id'
      },
      onDelete:'CASCADE'
    }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Airports', 'city_fkey_constraint')
  }
};
