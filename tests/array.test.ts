describe("Array", () => {
  it("should same in javascript", () => {
    const names: string[] = ["eko", "budi", "joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobbies);
  });

  it("should support tuple", () => {
    const person: readonly [string, string, number] = ["Dicky", "Putra", 25];
    console.info(person);

    console.info(person[2]);
  });
});
