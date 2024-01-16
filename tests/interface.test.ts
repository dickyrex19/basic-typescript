import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: "1",
      name: "Toko ABC",
      nib: "123",
      npwp: "312",
    };

    console.info(seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 3)).toBe(5);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["D", "J", "P"];
    console.info(names);
  });

  it("should support indexable interface for non-number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "DJP",
      address: "sby",
    };

    expect(dictionary["name"]).toBe("DJP");
    expect(dictionary["address"]).toBe("sby");

    // console.info(dictionary["name"]);
    // console.info(dictionary["address"]);
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "djp",
      division: "IT",
    };

    const manager: Manager = {
      id: "1",
      name: "djp",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(employee);
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "djp",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.info(person.sayHello("Har"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }
    type Domain = HasName & HasId;

    const domain: Domain = {
      id: "1",
      name: "djp",
    };
    console.info(domain);
  });

  it("should support type assertions", () => {
    const person: any = {
      name: "djp",
      age: 25,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
