var randFunction = require("randomstring");
var sha256 = require("sha256");

function generateSaltAndHash(password) {
  let salt = randFunction.generate(32);
  let hld = "" + salt + password + salt;
  return {
    password: sha256.x2(hld),
    salt
  };
}

function validateHashedPassword(hashedPassword, password, salt) {
  let hld = '';
  hld = salt + password + salt;
  hld = sha256.x2(hld);

  if (hashedPassword === hld)
    return true;
  else
    console.log(hld);
};
module.exports = {
  validateHashedPassword,
  generateSaltAndHash
}