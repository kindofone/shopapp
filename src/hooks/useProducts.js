import useFetch from "./useFetch";

export class Product {
  #price = 0;

  constructor(category, description, id, image, price, rating, title) {
    this.category = category;
    this.description = description;
    this.id = id;
    this.image = image;
    this.#price = price;
    this.rating = rating;
    this.title = title;
  }

  getPrice() {
    const price = this.category === "electronics" ? this.#price * 0.9 : this.#price;
    return parseFloat(price.toFixed(2));
  }
}

export default function useProducts(selectedCategory = "all") {
  return useFetch("https://fakestoreapi.com/products")
    .filter(product => selectedCategory !== "all" ? product.category === selectedCategory : true)
    .map(product => new Product(
      product.category,
      product.description,
      product.id,
      product.image,
      product.price,
      product.rating,
      product.title,
    ));
}