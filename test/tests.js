var assert = require("assert");

const { addTwoNumbers } = require("../src/script");

describe("Test 1: addTwoNumbers function", function () {

  it("it should return the value of two numbers", function () {
    let a = 2;
    let b = 3;
    let expectedResult = 5;
    assert.equal(addTwoNumbers(a, b), expectedResult);
  });

});