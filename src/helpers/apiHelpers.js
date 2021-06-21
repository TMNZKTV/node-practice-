const { ValidationError, WrongParameterError } = require("../helpers/errors");

// Оборачивает в try/catch каждый из контроллеров
const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError || error instanceof WrongParametError) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json({ message: error.message });
};

module.exports = {
  asyncWrapper,
  errorHandler,
};
