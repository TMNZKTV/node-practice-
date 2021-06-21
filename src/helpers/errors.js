class ValidationError extends Error {
  constructor(message) {
    this.status = 400;
    super(message);
  }
}
class WrongParameterError extends Error {
  constructor(message) {
    this.status = 400;
    super(message);
  }
}

module.exports = {
  ValidationError,
  WrongParameterError,
};
