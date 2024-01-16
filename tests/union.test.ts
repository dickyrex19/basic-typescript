describe("Union type", () => {
  it("should support in typescript", () => {
    let sample: string | number | boolean = "Dicky";
    sample = 25;
    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "number") {
        return value + 2;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return !value;
      }
    }
    expect(process(100)).toBe(102);
    expect(process("Dicky")).toBe("DICKY");
    expect(process(true)).toBe(false);
  });
});
