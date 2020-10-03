'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('user_id').notNullable().references('users.id').onDelete('cascade')
      table.integer('pelicula_id').unsigned().notNullable().references('peliculas.id').onDelete('cascade')
      table.text('comment').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
