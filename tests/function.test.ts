describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }
    expect(sayHello("djp")).toBe("Hello djp");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }
    printHello("djp");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Renn")).toBe("Hello Renn");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("DJ")).toBe("Hello DJ");
    expect(sayHello("DJ", "P")).toBe("Hello DJ P");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any) {
      if (typeof value === "number") {
        return value * 10;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      }
    }
    expect(callMe(10)).toBe(100);
    expect(callMe("djp")).toBe("DJP");
  });

  it("should support function as params", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("dicky", toUpper)).toBe("Hello DICKY");
    // Can assigned as Anonymous function
    expect(
      sayHello("DJP", function (name: string): string {
        return name.toLowerCase();
      })
    ).toBe("Hello djp");
    // can assigned as arrow function
    expect(sayHello("blud", (name: string): string => name.toUpperCase())).toBe(
      "Hello BLUD"
    );
  });
});
