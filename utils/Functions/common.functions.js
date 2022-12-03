const CommonReplyes = require('../Reply/common.reply');
const techAdmin = require('../../admins/techAdmin');

const errorMessage = (err, text) => `Hii,
There Is Some Error
For Message : ${error.message}techAdmin


*${text}*
`;

const sendCommonTextMessage = (number, text) => {
  /**
   * @type WIll Send Message For Every Possible Number
   * @public Admins | Developer | Users
   */
  try {
    return [number, CommonReplyes[text.toLowerCase()]];
  } catch (error) {
    return [techAdmin, errorMessage(error, text)];
  }
};

module.exports = {
  sendCommonTextMessage,
};
