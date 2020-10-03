'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genero extends Model {

    static get primaryKey () {
        return 'id'
    }

    peliculas () {
        return this
        .belongsToMany('App/Models/Pelicula').pivotTable('genero_peliculas')
    }

}

module.exports = Genero
