describe("If statement", () => {
  it("should support in typescript", () => {
    const examValue = 90;
    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try again");
    }
  });

  it("should support ternary operator", () => {
    const value = 80;
    const say = value >= 75 ? "Congratulations" : "Try again";
    console.info(say);
  });

  it("should support switch statement", () => {
    function sayHello(name: string): string {
      switch (name) {
        case "nom":
          return "Hi nom";
        case "hest":
          return "Hi hest";
        default:
          return "Hello";
      }
    }
    console.info(sayHello("nom"));
    console.info(sayHello("hest"));
    console.info(sayHello("gg"));
  });
});
