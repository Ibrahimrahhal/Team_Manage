const AService = require("../Services.js/auth.js");
const jwt = require("jsonwebtoken");
let userTest = {
  UserName: "Levi Ackerman",
  Email: "Levi.A@ServeyCourt.gov",
  Password: "C3C0A114BF9769F107003ACA3157DA439936A06B03E2D6F0E05965E742453BF2",
  _id: "1",
  teamIds: ["Levi's Squad"]
}
describe("Auth Services tests", () => {
  it("should return jwt with correct payload", () => {
    let token = AService.getJwt(userTest);
    expect
      (jwt.decode(token, {
        complete: true
      }).payload.UserName)
      .toEqual(userTest.UserName);
  });


  it("should verify Correct jwt", () => {
    let token = AService.getJwt(userTest);
    expect(AService.authUser(token, userTest.Password))
      .toBeTruthy();
  });




  it("shouldn't verify wrong jwt", () => {
    let token = AService.getJwt(userTest);
    expect(AService.authUser(token, "Wrong Password"))
      .toBeFalsy();
  });




});