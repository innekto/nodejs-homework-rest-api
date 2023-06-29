const path = require("path");
const fs = require("fs");
const { User } = require("../../models");
const { controllersWrapper } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
console.log("avatarsDir", avatarsDir);

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tmpUpload, originalname } = req.file;

  const resultUpload = path.join(avatarsDir, originalname);

  fs.rename(tmpUpload, resultUpload);

  const avatarUrl = path.join("avatars", originalname);

  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({ avatarUrl });
};

module.exports = { updateAvatar: controllersWrapper(updateAvatar) };
