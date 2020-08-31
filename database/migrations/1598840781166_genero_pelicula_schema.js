'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeneroPeliculaSchema extends Schema {
  up () {
    this.create('genero_peliculas', (table) => {
      table.string('genero', 80).notNullable()
      table.integer('pelicula', 80).notNullable()
      table.timestamps()

      table.primary(columns, ['genero','pelicula'])
      table.foreign('genero').references('name').inTable('generos')
      table.foreign('pelicula').references('id').inTable('peliculas')
    })
  }

  down () {
    this.drop('genero_peliculas')
  }
}

module.exports = GeneroPeliculaSchema
