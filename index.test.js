const { withdraw } = require(".");

describe("withdraw", () => {
  it("should withdraw R$80", () => {
    const expectedValue = withdraw(80);
    expect(expectedValue).toStrictEqual({
      100: 0,
      50: 1,
      20: 1,
      10: 1,
    });
  });
});
