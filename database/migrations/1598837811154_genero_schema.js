'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeneroSchema extends Schema {
  up () {
    this.create('generos', (table) => {
      table.string('name', 80).notNullable().primary()
      table.string('restriction').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('generos')
  }
}

module.exports = GeneroSchema
