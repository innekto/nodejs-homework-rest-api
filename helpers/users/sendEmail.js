const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "bobozak19874538@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "bobozak19874538@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = { sendEmail };
