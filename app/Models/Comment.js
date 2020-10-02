'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {

    static get primaryKey () {
        return 'id'
    }

    users () {
        return this.belongsTo('App/Models/User')
    }

    peliculas () {
        return this.belongsTo('App/Models/Pelicula')
    }

}

module.exports = Comment
