const PService = require("../Services.js/Passwords");
const sha256 = require("sha256");
describe("Password Service Tests", () => {
  it("should return correct hash", () => {
    let var1 = PService.generateSaltAndHash("test");
    let var2 = sha256.x2("" + var1.salt + "test" + var1.salt);
    expect(var1.password).toBe(var2);
  });
  it("should validate given hash", () => {
    let salt = "salt";
    let hashedPassword = sha256.x2("" + salt + "test" + salt);
    expect(
        PService
        .validateHashedPassword(hashedPassword, "test", salt)
      )
      .toBeTruthy();
  });

  it("should detect wrong hash", () => {
    let salt = "salt";
    let hashedPassword = sha256.x2("" + salt + "test" + salt);
    expect(
        PService
        .validateHashedPassword(hashedPassword, "tast", salt)
      )
      .toBeFalsy();
  });

});