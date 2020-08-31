'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {

    users () {
        return this.belongsTo('App/Models/Genero')
    }

    peliculas () {
        return this.belongsTo('App/Models/Pelicula')
    }

}

module.exports = Comment
