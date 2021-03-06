'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('settings', [
      {
        key: 'language',
        value: 'en-us',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: 'show_usernames',
        value: 'yes',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: 'background_image',
        value: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        key: 'app_version',
        value: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('settings', null, {})
  }
}
