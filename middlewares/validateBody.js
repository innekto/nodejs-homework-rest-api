const { HttpError } = require("../helpes");

const validateBody = (schema, message) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, message));
    }
    next();
  };
  return func;
};

module.exports = {
  validateBody,
};
