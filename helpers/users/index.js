const { emailRegexp } = require("./emailRegexp");
const { processAvatar } = require("./avatarRefactor");
const { sendEmail } = require("./sendEmail");
module.exports = { emailRegexp, processAvatar, sendEmail };
