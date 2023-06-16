// схема валідаціі запитів за допомогою бібліотеки joi
const Joi = require("joi");
const { phoneNumberValidation } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(16).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneNumberValidation).required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateFavoriteSchema,
};
