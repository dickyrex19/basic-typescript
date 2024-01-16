import { Category } from "../src/type-alias";
import { Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: "1",
      name: "Handphone",
    };

    const product: Product = {
      id: 1,
      name: "Samsung S20",
      price: 2000000,
      category: category,
      description: "New Pack",
    };

    console.info(category);
    console.info(product);
  });
});
