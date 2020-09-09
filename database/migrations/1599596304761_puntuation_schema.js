'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PuntuationSchema extends Schema {
  up () {
    this.create('puntuations', (table) => {
      table.increments('id').primary()
      table.integer('pelicula_id').unsigned().notNullable()
      table.string('username', 80).notNullable()
      table.integer('puntuation').notNullable()
      table.timestamps()

      table.foreign('pelicula_id').references('peliculas.id').onDelete('cascade')
      table.foreign('username').references('users.user_nick').onDelete('cascade')
    })
  }

  down () {
    this.drop('puntuations')
  }
}

module.exports = PuntuationSchema
