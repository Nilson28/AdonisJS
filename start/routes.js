"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.group(() => {
  Route.get("/", "UserController.index").middleware('auth');
  Route.post("/", "UserController.store");
  Route.post("/login", "UserController.login");
}).prefix("api/v1/users");

Route.group(() => {
  Route.get("/", "GeneroController.index");
  Route.post("/", "GeneroController.store");
}).prefix("api/v1/genero");

Route.group(() => {
  Route.get("/", "PeliculaController.index");
  Route.get("/:movie_id", "PeliculaController.show");
  Route.post("/", "PeliculaController.store");
}).prefix("api/v1/pelicula");

Route.group(() => {
  Route.get("/", "PuntuationController.index");
  Route.post("/", "puntuationController.store");
}).prefix("api/v1/puntuation");

Route.group(() => {
  Route.get("/", "CommentController.index");
  Route.post("/", "CommentController.store").middleware('auth');
}).prefix("api/v1/comment");
