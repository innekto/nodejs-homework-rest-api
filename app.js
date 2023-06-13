// імпортуємо модуль Express.js, який дозволяє створювати та налаштовувати веб-сервер.
const express = require("express");
// логування http-запитів
const logger = require("morgan");
// дозволяємо робити запити з інших доменів
const cors = require("cors");
// модуль який дозволяє завантажити значення змінних середовища з файлу .env
require("dotenv").config();
// імпотруємо маршрутизатор
const contactsRouter = require("./routes/api/contacts");

const app = express();
//  формат логування в залежності від середовища виконання.
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
//  middleware  Morgan для логування HTTP-запитів з використанням визначеного формату.
app.use(logger(formatsLogger));
//  middleware CORS для обробки запитів з інших доменів.
app.use(cors());
//  middleware для обробки JSON-даних, надісланих у тілі запиту.
app.use(express.json());

app.use("/api/contacts", contactsRouter);
//  middleware, який відповідає за обробку запитів, які не відповідають жодному маршруту.
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
// middleware для обробки помилок.
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
