'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GeneroPelicula extends Model {

    generos () {
        return this.belongsToMany('App/Models/Genero')
    }

    peliculas () {
        return this.belongsToMany('App/Models/Pelicula')
    }

}

module.exports = GeneroPelicula
