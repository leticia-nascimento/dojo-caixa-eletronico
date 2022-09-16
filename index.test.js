const { withdraw } = require(".");

describe("withdraw", () => {
  it("should withdraw R$20", () => {
    const expectedValue = withdraw(80);
    expect(expectedValue).toBe(
      "Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00."
    );
  });
});
