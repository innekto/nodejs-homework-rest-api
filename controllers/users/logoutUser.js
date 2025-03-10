const { controllersWrapper } = require("../../helpers");
const { User } = require("../../models");

const logoutUser = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).json({});
};

module.exports = { logoutUser: controllersWrapper(logoutUser) };
