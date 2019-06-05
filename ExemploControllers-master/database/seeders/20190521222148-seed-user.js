'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        login: 'admin',
        senha: '$2y$12$psF.ifAtpXHOOtmeMOE00uKosdKgjdmS7/tD0en6dVcDqtblXpPLq',
        createdAt: '2019-01-01',
        updatedAt: '2019-01-01'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Users', null, {});
  
  }
};
