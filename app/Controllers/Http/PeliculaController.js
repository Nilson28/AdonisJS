"use strict";

const Pelicula = use("App/Models/Pelicula");
const Genero = use("App/Models/Genero");
const GeneroPelicula = use("App/Models/GeneroPelicula");
const Puntuation = use("App/Models/Puntuation");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with peliculas
 */
class PeliculaController {
  /**
   * Show a list of all peliculas.
   * GET peliculas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const peliculas = await Pelicula.query()
      .with("generos")
      .with("comments")
      .fetch();
    response.status(202).json(peliculas);
  }

  /**
   * Render a form to be used for creating a new pelicula.
   * GET peliculas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pelicula.
   * POST peliculas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const movieData = request.only([
      "name",
      "image",
      "video",
      "duration",
      "description",
    ]);
    const generos = request.only(["generos"]);
    const pelicula = await Pelicula.create(movieData);
    for (var i = 0; i < generos.generos.length; i++) {
      await pelicula.generos().attach([generos.generos[i]]);
    }
    response
      .status(202)
      .json({ message: "Pelicula creada satisfactoriamente" });
  }

  /**
   * Display a single pelicula.
   * GET peliculas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const movieId = params.movie_id;
    const pelicula = await Pelicula.findBy("id", movieId);
    await pelicula.load("generos");
    await pelicula.load("comments.users");
    response.status(202).json(pelicula);
  }

  /**
   * Render a form to update an existing pelicula.
   * GET peliculas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pelicula details.
   * PUT or PATCH peliculas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a pelicula with id.
   * DELETE peliculas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PeliculaController;
