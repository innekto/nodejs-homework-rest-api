const { Contact } = require("../../models/contact/contact");
const { controllersWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  // вказуємо id юзера при запиті на всі контакти для відображення тільки контактів даного юзера
  // та видаляємо з видимості поля -createdAt -updatedAt
  const result = await Contact.find({ owner }, "-createdAt -updatedAt");
  console.log("Contact", Contact);
  res.json(result);
};

module.exports = { getAllContacts: controllersWrapper(getAllContacts) };
