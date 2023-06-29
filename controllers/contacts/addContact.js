const { controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact/contact");

const addContact = async (req, res) => {
  // присвоюємо змінній owner значення властивості _id
  // щоб не використовувати req.user._id кожного разу коли знадобиться
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

module.exports = { addContact: controllersWrapper(addContact) };
