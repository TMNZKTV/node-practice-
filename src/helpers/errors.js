class NodeJs26Error extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends NodeJs26Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParameterError extends NodeJs26Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends NodeJs26Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  ValidationError,
  WrongParameterError,
  NotAuthorizedError,
  NodeJs26Error,
};
