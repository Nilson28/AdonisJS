'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genero extends Model {

    peliculas () {
        return this.hasMany('App/Models/Pelicula')
        .pivotTable('genero_peliculas')
    }

}

module.exports = Genero
