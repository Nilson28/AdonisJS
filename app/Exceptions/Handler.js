"use strict";

const BaseExceptionHandler = use("BaseExceptionHandler");

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    console.log("Error:" + error.code);
    console.log("Error 2:" + error.message);
    switch (error.code) {
      case "23505":
        return response.status(error.status).json({ message: error.detail });

      case "E_PASSWORD_MISMATCH":
        return response
          .status(error.status)
          .json({ message: "Contraseña Incorrecta" });

      case "E_USER_NOT_FOUND":
        return response
          .status(error.status)
          .json({ message: "Usuario no encontrado" });

      case "E_INVALID_JWT_TOKEN":
        return response
          .status(error.status)
          .json({ message: "token invalido" });

      default:
        //in production turn off this response and send a 500 error
        response.status(500).json({
          message: "Server internal error",
        });
        break;
    }
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {}
}

module.exports = ExceptionHandler;
