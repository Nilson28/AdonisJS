'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.string('usuario').notNullable()
      table.integer('pelicula').notNullable()
      table.text('commentario', longtext).notNullable()
      table.timestamps()

      table.primary(columns, ['usuario','pelicula'])
      table.foreign('usuario').references('username').inTable('users')
      table.foreign('pelicula').references('id').inTable('peliculas')
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
