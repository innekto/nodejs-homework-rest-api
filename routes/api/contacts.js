const express = require("express");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");

const {
  addSchema,
  updateFavoriteSchema,
  updateContactSchema,
} = require("../../schemas/contacts");

const {
  getAllContacts,
  getById,
  addContact,
  updateById,
  updateStatusContact,
  deleteById,
} = require("../../controllers/index");

router
  .route("/")
  .get(getAllContacts)
  .post(validateBody(addSchema, "Set name for contact"), addContact);

// встановлюємо middleware-функцію isValidId для всіх HTTP-запитів,
// які співпадають з маршрутом "/:contactId"яка перевіряє валідність id.
router.use("/:contactId", isValidId);
router
  .route("/:contactId")
  .get(getById)
  .delete(deleteById)
  .put(validateBody(updateContactSchema, "missing fields"), updateById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema, "missing field favorite"),
  updateStatusContact
);

module.exports = router;
