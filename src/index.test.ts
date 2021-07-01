import foo from "./index.js";

describe("foo", () => {
  it("returns a value", () => {
    expect(foo()).toEqual(42);
  });
});
