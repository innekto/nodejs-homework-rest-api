const { Contact } = require("../../models/contact/contact");
const { controllersWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  // ===================пагінація=============== //
  // витягуємо поля page та limit
  const { page = 1, limit = 10 } = req.query;
  // параметр skip вказує скільки треба пропустити елементів для віддачі першрого результату
  const skip = (page - 1) * limit;
  // ===================пагінація=============== //
  // вказуємо id юзера при запиті на всі контакти для відображення тільки контактів даного юзера
  // та видаляємо з видимості поля -createdAt -updatedAt
  // передаємо третім аргументов об'ект налаштувань з параметрами skip та limit для пагінації
  // і додаємо поля юзера які треба відобразити за допомогою populate()
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  console.log("Contact", Contact);
  res.json(result);
};

module.exports = { getAllContacts: controllersWrapper(getAllContacts) };
