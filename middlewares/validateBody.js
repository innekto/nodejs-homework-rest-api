// загальне тіло валідаціїї запиту, яке приймає в себе схему валідації,
// та видає помилку якщо не бракує якогось поля у запиті

const { HttpError } = require("../helpes");

const validateBody = (schema, message) => {
  const func = (req, _, next) => {
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
