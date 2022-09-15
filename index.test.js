const { sack } = require(".");

describe("sack", () => {
  it("should sack R$20", () => {
    const expectedValue = sack(80);
    expect(expectedValue).toBe(
      "Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00."
    );
  });
});
