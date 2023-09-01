const { describe, it } = require("node:test");
const assert = require("assert");
const { add } = require("../src/addition");

describe("addition", () => {
  it("should add two numbers", () => {
    assert.strictEqual(add(1, 2), 3);
  });

  it("should add two negative numbers", () => {
    assert.strictEqual(add(-1, -2), -3);
  });
});
