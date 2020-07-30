class GenericError extends Error {
  constructor(message, options = {}) {
    super(message);

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }

    this.name = 'GenericError';
  }
}

module.exports = GenericError;