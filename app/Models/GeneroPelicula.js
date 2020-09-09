'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GeneroPelicula extends Model {

  static get primaryKey() {
    return 'id'
  }

  generos() {
    return this
      .belongsToMany('App/Models/Genero')
  }

  peliculas() {
    return this
      .belongsToMany('App/Models/Pelicula').pivotTable('genero_peliculas')
  }
}

module.exports = GeneroPelicula
