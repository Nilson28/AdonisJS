'use strict'

const Puntuation = use('App/Models/Puntuation')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with puntuations
 */
class PuntuationController {
  /**
   * Show a list of all puntuations.
   * GET puntuations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    response.status(202).json(Puntuation.all())
  }

  /**
   * Render a form to be used for creating a new puntuation.
   * GET puntuations/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new puntuation.
   * POST puntuations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const puntuationData = request.only(['username', 'pelicula_id', 'puntuation'])
    const {username, pelicula_id} = request.body
    const find = await Puntuation.query().where(function () {
      this
        .where('username', username)
        .andWhere('pelicula_id', pelicula_id)
    }).fetch()
    console.log(find)
    if(find.rows.length == 0){
      const puntuation = await Puntuation.create(puntuationData)
      return response.status(202).json(puntuation)
    }
    else{
      return response.status(202).json({message: 'Solo puntua una vez'})
    }
    
  }

  /**
   * Display a single puntuation.
   * GET puntuations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing puntuation.
   * GET puntuations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update puntuation details.
   * PUT or PATCH puntuations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a puntuation with id.
   * DELETE puntuations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PuntuationController
