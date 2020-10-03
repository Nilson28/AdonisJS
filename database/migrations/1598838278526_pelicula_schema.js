'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeliculaSchema extends Schema {
  up () {
    this.create('peliculas', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.text('image').notNullable()
      table.text('video').notNullable()
      table.time('duration', {precision: 2})
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('peliculas')
  }
}

module.exports = PeliculaSchema
