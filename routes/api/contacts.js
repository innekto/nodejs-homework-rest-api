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

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(addSchema, "Set name for contact"), addContact);

router.delete("/:contactId", isValidId, deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchema, "missing fields"),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema, "missing field favorite"),
  updateStatusContact
);

module.exports = router;
