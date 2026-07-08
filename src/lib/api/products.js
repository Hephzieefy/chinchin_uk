import { products } from "@/data/products";

// TODO: point at NEXT_PUBLIC_API_BASE_URL once a real backend exists, e.g.:
// const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
// return res.json();

export async function getProducts() {
  return products;
}

export async function getProduct(id) {
  return products.find((product) => product.id === id) ?? null;
}
