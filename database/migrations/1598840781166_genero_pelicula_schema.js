'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeneroPeliculaSchema extends Schema {
  up () {
    this.create('genero_peliculas', (table) => {
      table.increments('id').primary()
      table.string('genero_id', 80).unsigned().references('generos.name').index('genero_id').onDelete('cascade')
      table.integer('pelicula_id', 80).unsigned().references('peliculas.id').index('pelicula_id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('genero_peliculas')
  }
}

module.exports = GeneroPeliculaSchema
