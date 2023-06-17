const { HttpError, controllersWrapper } = require("../../helpers");

const { Contact } = require("../../models/contact");

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
  updateStatusContact: controllersWrapper(updateStatusContact),
};
