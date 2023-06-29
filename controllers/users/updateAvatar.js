const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { User } = require("../../models");
const { controllersWrapper } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tmpUpload, originalname } = req.file;
  // отримуємо розширення файлу
  const [extention] = originalname.split(".").reverse();
  //  даємо унікальне ім'я за айдішником юзера
  const newFileName = `${_id}.${extention}`;

  const resultUpload = path.join(avatarsDir, newFileName);

  await fs.rename(tmpUpload, resultUpload);

  const avatarUrl = path.join("avatars", newFileName);

  const avatar = await Jimp.read(resultUpload);

  avatar
    .autocrop()
    .contain(
      250,
      250,
      Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
    );
  await avatar.writeAsync(resultUpload);

  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({ avatarUrl });
};

module.exports = { updateAvatar: controllersWrapper(updateAvatar) };
