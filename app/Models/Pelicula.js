'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pelicula extends Model {

    static get primaryKey () {
        return 'id'
    }

    comments () {
        return this.hasMany('App/Models/Comment')
    }

    generos () {
        return this
        .belongsToMany('App/Models/Genero').pivotTable('genero_peliculas')
    }

    puntuations () {
        return this.hasMany('App/Models/Puntuation')
      }

}

module.exports = Pelicula
