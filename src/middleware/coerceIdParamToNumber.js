function coerceIdParamToNumber(req, _, next) {
    if (!Number.isNaN(Number(req.params.id))) {
      req.params.id = Number(req.params.id);
    }

    next();
}

module.exports = coerceIdParamToNumber;
