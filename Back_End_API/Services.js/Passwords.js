var randFunction = require("randomstring");
var sha256 = require("sha256");

function generateSaltAndHash(password) {
  let salt = randFunction.generate(32);
  return {
    password: sha256.x2(salt + password + salt),
    salt
  };
}

function validateHashedPassword(hashedPassword, password, salt) {
  if (hashedPassword === (sha256.x2(salt + password + salt)))
    return true;
  else
    return false;
};
module.exports = {
  validateHashedPassword,
  generateSaltAndHash
}