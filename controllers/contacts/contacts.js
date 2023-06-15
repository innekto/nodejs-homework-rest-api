const { HttpError, controllersWrapper } = require("../../helpes");

const { Contact } = require("../../models/contact");

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  console.log("Contact", Contact);
  res.json(result);
};
const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  res.json(result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  // оновлюємо контакт по  id та передаємо третім аргументом
  // об'єкт налаштувань щоб повертало вже оновлений контакт
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  // ========додаткова перевірка на значення статусу===== //
  const currentContact = await Contact.findById(contactId);
  if (!currentContact) {
    throw HttpError(404, "Not found");
  }
  // Перевірка, чи значення в полі favorite змінене
  if (currentContact.favorite === req.body.favorite) {
    throw HttpError(
      400,
      "Favorite value is already set to the specified value"
    );
  }
  // =================================== //

  // оновлюємо контакт по  id та передаємо третім аргументом
  // об'єкт налаштувань щоб повертало вже оновлений контакт
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAllContacts: controllersWrapper(getAllContacts),
  getById: controllersWrapper(getById),
  addContact: controllersWrapper(addContact),
  updateById: controllersWrapper(updateById),
  deleteById: controllersWrapper(deleteById),
  updateStatusContact: controllersWrapper(updateStatusContact),
};
