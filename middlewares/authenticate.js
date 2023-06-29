const jwt = require("jsonwebtoken");

const { User } = require("../models");
const { HttpError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  // перевіряємо що є у хедері authorization
  const { authorization = "" } = req.headers;
  // витягуємо Bearer та token із хедеру якщо такі є
  const [bearer, token] = authorization.split(" ");
  // перевіряємо по черзі наявнісь Bearer та  token
  // якщо немає Bearer одразу викидаємо помилку
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized"));
  }
  // якщо Bearer є - йдемо далі та перевіряємо токен
  try {
    // якщо токен є дійсним і успішно перевірено,
    // витягуємо поле id з об'єкту,який містить інформацію, закодовану у токені .
    const { id } = jwt.verify(token, SECRET_KEY);
    // знаходимо юзера з таким id якшо він є
    const user = await User.findById(id);
    // якщо немає або немаю токену або токен юзера не дорівнює токену який нам прийшов то викидаємо помилку
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }
    // записуємо інфо про юзера щоб розуміти хто робить запити
    req.user = user;

    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = { authenticate };
