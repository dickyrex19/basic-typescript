describe("Any", () => {
  it("should should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "Dicky Putra",
      age: 25,
    };

    person.age = 26;
    person.address = "Surabaya";

    console.info(person);
  });
});
