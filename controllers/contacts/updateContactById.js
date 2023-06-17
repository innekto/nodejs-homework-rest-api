const { HttpError, controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact");

const updateContactById = async (req, res) => {
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

module.exports = { updateContactById: controllersWrapper(updateContactById) };
