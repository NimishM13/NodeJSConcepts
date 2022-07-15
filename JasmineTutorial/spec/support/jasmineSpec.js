var app = require("./hellper.js");
describe("Addition", function () { //give name to test
  it("The function should add 2 numbers", function () { //describe the test case
    var value = app.AddNumber(5, 6); //give parameters
    expect(value).toBe(12); //expected value
  });
});

describe("Sub", function () { //give name to test
  it("The function should subtract 2 numbers", function () { //describe the test case
    var value = app.SubNumber(11, 7); //give parameters
    expect(value).toBe(5); //expected value
  });
});
