const express = require("express");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");

const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");

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

router
  .route("/:contactId")
  .get(isValidId, getById)
  .delete(isValidId, deleteById)
  .put(isValidId, validateBody(addSchema, "missing fields"), updateById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema, "missing field favorite"),
  updateStatusContact
);

module.exports = router;
