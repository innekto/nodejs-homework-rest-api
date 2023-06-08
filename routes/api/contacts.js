const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares");

const { addSchema } = require("../../schemas/books");

const {
  getAllContacts,
  getById,
  add,
  updateById,
  deleteById,
} = require("../../controllers/contacts");

router.get("/", getAllContacts);

router.get("/:contactId", getById);

router.post("/", validateBody(addSchema), add);

router.delete("/:contactId", deleteById);

router.put("/:contactId", validateBody(addSchema), updateById);

module.exports = router;
