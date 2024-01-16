import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should return hello djp", () => {
    expect(sayHello("djp")).toBe("Hello djp");
  });
});
