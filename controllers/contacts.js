const { HttpError, controllersWrapper } = require("../helpes");

const { Contact } = require("../models/contact");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  console.log("Contact", Contact);
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await getContactById(contactId);
//   res.json(result);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
// };

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({
//     message: "contact deleted",
//   });
// };

module.exports = {
  getAllContacts: controllersWrapper(getAllContacts),
  // getById: controllersWrapper(getById),
  add: controllersWrapper(add),
  // updateById: controllersWrapper(updateById),
  // deleteById: controllersWrapper(deleteById),
};
