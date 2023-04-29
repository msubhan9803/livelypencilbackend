const otpGenerator = require('otp-generators');

const getUniqueOneTimePassword = (size = 6) => {
  return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChar: false });
};

const titleCase = function (text) {
  let newText = '';
  let textTemp = text;
  textTemp = textTemp.toLowerCase();
  textTemp = textTemp.charAt(0).toUpperCase() + textTemp.slice(1);
  for (let i = 0; i < textTemp.length; i++) {
    if (textTemp[i] === ' ') {
      newText += ` ${textTemp[i + 1].toUpperCase()}`;
      i++;
    } else {
      newText += textTemp[i];
    }
  }
  return newText;
};

const getFirstAndLastDayOfMonth = async (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const result = {
    firstDayOfMonth,
    lastDayOfMonth,
  };

  return result;
};

module.exports = {
  getUniqueOneTimePassword,
  titleCase,
  getFirstAndLastDayOfMonth,
};
