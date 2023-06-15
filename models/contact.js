const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpes");
const { phoneNumberValidation } = require("../helpes");
//  схема контакту
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      match: phoneNumberValidation,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionkey: false, timestamps: true } // убираємо версію та втановлюємо часові рамки створення та редагування контакту
);

// якщо при збереженні нового контакту станеться помилка то спрацьовує handleMongooseError
contactSchema.post("save", handleMongooseError);

const Contact = model("Contact", contactSchema);

module.exports = {
  Contact,
};
