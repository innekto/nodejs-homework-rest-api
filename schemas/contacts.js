// схема валідаціі запитів за допомогою бібліотеки joi
const Joi = require("joi");
const { phoneNumberValidation } = require("../helpes");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(16).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneNumberValidation).required(),
  favorite: Joi.boolean(),
});

module.exports = {
  addSchema,
};
