import { Product } from "@repo/types";

export default async function Products() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] },
  });

  const products: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((prod) => (
          <div key={prod.id}>
            <p>Name: {prod.name}</p>
            <p>Price: {prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
