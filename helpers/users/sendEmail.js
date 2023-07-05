const nodemailer = require("nodemailer");

// const { META_PASSWORD } = process.env;
const { GMAIL_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "bobozak19874538@meta.ua",
//     pass: META_PASSWORD,
//   },
// };

const nodemailerConfig = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  //   secureConnection: false,
  auth: {
    user: "virchenko.vlad.2021@gmail.com",
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "virchenko.vlad.2021@gmail.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = { sendEmail };
