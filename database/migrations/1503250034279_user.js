'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.string('name', 80).notNullable()
      table.string('last_name', 80).notNullable()
      table.string('username', 80).notNullable().unique().primary()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('sexo', 80)
      table.integer('edad').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
